const User  = require("../models/user");

async function handleGetAllUsers(req,res) {
    const allDbUsers = await User.find({});
   //res.setHeader("X-MyName", "Rohit Goswami"); //Custom Header -> Always add "X" to custom headers
    return res.json(allDbUsers);
}

async function handleGetUserById(req,res) {
    const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);  // fetching the req id
    // const user = users.find((user)=> user.id === id); //finding the req user from db
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json(user);
}

async function handleUpdateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, {lastName:"Changed"}); 
    return res.json({status: "Success"});
}

async function handleDeleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "pending"});
}

async function handleCreateNewUser(req,res) {
    const body = req.body;   //fetching the data of the form from backend db or postman
    if(!body||!body.first_name||!body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are req..."});
    }
    
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    console.log(result);

    return res.status(201).json({msg:"Success", id: result._id});
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}