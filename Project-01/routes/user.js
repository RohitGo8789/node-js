const express = require("express");

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
router.get("/", async(req,res)=>{
    const allDbUsers = await User.find({});
   //res.setHeader("X-MyName", "Rohit Goswami"); //Custom Header -> Always add "X" to custom headers
    return res.json(allDbUsers);
});

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
    .get(async(req, res)=>{
            const user = await User.findById(req.params.id);
            // const id = Number(req.params.id);  // fetching the req id
            // const user = users.find((user)=> user.id === id); //finding the req user from db
        
            return res.json(user);
    })
    .patch(async(req, res)=>{
           await User.findByIdAndUpdate(req.params.id, {lastName:"Changed"}); 
            return res.json({status: "Success"});
    })
    .delete(async(req, res)=>{
            await User.findByIdAndDelete(req.params.id);
            return res.json({status: "pending"});
    });

    router.post("/", async(req, res)=>{
    
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

    return res.status(201).json({msg:"Success"});
    //users.push({...body, id: users.length + 1}); //pushing the fetched object data(json) into the existing users data
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{    //writing into the file using fs module
    //     return res.status(201).json({status: "success", id: users.length});
    // });  
   
});

module.exports = router;