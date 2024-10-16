const express = require("express"); 
const users = require("./MOCK_DATA.json");
const fs = require("fs");


const app = express();
const PORT = 8000;

//Middleware -> plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    fs.appendFile("log.txt", `\n ${Date.now()}: ${req.ip} ${req.method} ${req.path}`,(err,data)=>{
        next();
    })
});

// app.use((req,res,next)=>{
//     console.log("Hello from ", req.myUserName);
//     //return res.json({msg :'Hello from '});
//     next();
// })

//Routes

//HTML render for browser
app.get("/users", (req, res)=>{
    const html  = `
        <ul>
            ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});


//for json - for all devices -- REST api
app.get("/api/users", (req,res)=>{
    return res.json(users);
});

// app.get("/api/users/:id", (req, res)=>{
//     const id = Number(req.params.id);  // fetching the req id
//     const user = users.find((user)=> user.id === id); //finding the req user from db

//     return res.json(user);
// });



// app.patch("/api/users/:id", (req, res)=>{
//     //TODO : Edit the user with id
//     return res.json({status: "pending"});
// });


// app.delete("/api/users/:id", (req, res)=>{
//     //TODO : Delete the user with id
//     return res.json({status: "pending"});
// });


//Merging the above three routes

app
    .route("/api/users/:id")
    .get((req, res)=>{
            const id = Number(req.params.id);  // fetching the req id
            const user = users.find((user)=> user.id === id); //finding the req user from db
        
            return res.json(user);
    })
    .patch((req, res)=>{
            //TODO : Edit the user with id
            return res.json({status: "pending"});
    })
    .delete((req, res)=>{
            //TODO : Delete the user with id
            return res.json({status: "pending"});
    });

app.post("/api/users", (req, res)=>{
    const body = req.body;   //fetching the data of the form from backend db or postman
    users.push({...body, id: users.length + 1}); //pushing the fetched object data(json) into the existing users data
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{    //writing into the file using fs module
        return res.json({status: "success", id: users.length});
    });  
   
});



app.listen(PORT, ()=>console.log(`Server started at Port: ${PORT}`));
