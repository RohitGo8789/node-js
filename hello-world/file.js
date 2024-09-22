const fs = require("fs");
const os = require('os');

console.log(os.cpus().length); //my device cpu core length - > max no of threads my cpu can handle at a time

// Sync -> Blocking Request
// fs.writeFileSync("./test.txt", "Hello everyone!")

// Async -> Non-Blocking Request
// fs.writeFile("./test.txt", "Hello async", (err)=>{});

// const res = fs.readFileSync("./contacts.txt", "utf-8"); //synchronous read ,,,, utf-8 is used for encoding the file
// console.log(res);
//Default Thread Pool Size = 4
//Max ? - 8 core cpu - 8 (eg)

//async reading
// fs.readFile("./contacts.txt", "utf-8",(err,result)=>{
//   if(err){
//     console.log("Error", err);
//   }else{
//     console.log(result);
//   }
// })

//appending the content in the file
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",`${Date.now()} Hey There!!\n`);


//copy curr file in a new file
// fs.cpSync("./test.txt", "./copy.txt");

//delete a file
// fs.unlinkSync("./copy.txt");

//check the status of the file
// console.log(fs.statSync("./test.txt").isFile());

//making directory or new folder
// fs.mkdirSync("my-docs"); //single folder

// fs.mkdirSync("my-docss/a/b", {recursive:true});  //multiple folders


