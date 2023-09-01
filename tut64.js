const fs =require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("browser","rohan");
console.log("the contant of file is");
console.log(text);

console.log("creating a new file")
fs.writeFileSync("rohan.txt",text);