const User = require("../models/user");

const {setUser} = require("../service/auth");
const {v4: uuidv4} = require("uuid");
async function handleUserSignup(req,res) {
    const { name, email, password } = req.body; 
    await User.create({
        name,email,password
    });
    return res.redirect("/");
}

async function handleUserLogin(req,res) {
    const { email, password } = req.body; 
    const user = await User.findOne({email, password});
    if(!user)res.render("login", {
        error: "Invalid username or password",
    })

    // const sessionId = uuidv4();

    const token = setUser(user);
    //res.cookie("uid", token);
    //return res.redirect("/");

    return res.json({token});
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}