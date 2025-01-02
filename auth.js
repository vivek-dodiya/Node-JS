const register = function (username){
    console.log(`Hello ${username} Has Been Registered`);
};

const loggedin = function(username,password){
    console.log(`Hello ${username} Has Been Loggedin`);
}
module.exports = {register, loggedin}
