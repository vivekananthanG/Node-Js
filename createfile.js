const fs=require("fs");

const nicequate="Balaji is a good boy"

fs.writeFile("./cool.txt",nicequate,(err)=>{
    console.log("Completed writing!!");
});