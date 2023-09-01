//synchronous or blocking
//line by line execution


//asynchronuos ox nonlocking
// -line by line execution not guaranteed
// -callbacks will fire


const fs =require("fs");
let text = fs.readFile("dele.txt","utf-8",(a,b)=>{
    console.log(data);
});
console.log("this is a message");