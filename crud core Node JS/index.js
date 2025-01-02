const http = require('http');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/CRUD_With_Core_NODE_JS").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB");
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
})
const User = mongoose.model("User", userSchema);


const app = http.createServer(async (req, res) => {
    const method = req.method;
    if (method === 'POST' && req.url === "/create") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { name, email, age } = JSON.parse(body);
            const user = new User({ name, email, age });
            user.save().then(() => {
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User created successfully' }));
            }).catch((err) => {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Error creating user' }));
            });
        });
    } else if (method === 'GET' && req.url === '/users') {
        User.find().then((users) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        }).catch((err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error fetching users' }));
        });
    } 
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})