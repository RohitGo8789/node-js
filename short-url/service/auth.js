const jwt = require("jsonwebtoken");
const secret = "Rohit$1234$";

function setUser(user) {
    if (!user || !user._id || !user.email) {
        throw new Error("Invalid user object");
    }

    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret);
}

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    } 
}

module.exports = {
    setUser, 
    getUser,
};
