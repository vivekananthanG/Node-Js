const fs=require("fs");

fs.readFile("./awesome.txt","utf-8",(err,data)=>{
    //callback
    console.log(data);
});

const nicequate="\nBalaji is a good boy"

fs.appendFile("./fun.html",nicequate,(err)=>{
    console.log("Completed updating!!");
});

fs.readdir("./backup",(err,data)=>{
console.log(data);
});



