const express = require("express");
const {handleGetAllUsers , handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user")

const router = express.Router();

//Routes

//HTML render for browser
// router.get("/", async(req, res)=>{
//     const allDbUsers = await User.find({});
//     const html  = `
//         <ul>
//             ${allDbUsers.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// });


//for json - for all devices -- REST api
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// router.get("/api/users/:id", (req, res)=>{
//     const id = Number(req.params.id);  // fetching the req id
//     const user = users.find((user)=> user.id === id); //finding the req user from db

//     return res.json(user);
// });



// router.patch("/api/users/:id", (req, res)=>{
//     //TODO : Edit the user with id
//     return res.json({status: "pending"});
// });


// router.delete("/api/users/:id", (req, res)=>{
//     //TODO : Delete the user with id
//     return res.json({status: "pending"});
// });


//Merging the above three routes

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);



module.exports = router;