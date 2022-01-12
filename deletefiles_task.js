// const fs=require("fs");
// const path = require("path");

// const directory = "./backup";

// fs.readdir(directory, (err, files) => {
//   if (err) throw err;

//   for (const file of files) {
//     fs.unlink(path.join(directory, file), err => {
//       if (err) throw err;
//     });
//   }
// });

const fs=require("fs");

fs.readdir("./backup", (err, data) => {

  data.forEach((fileName)=>{

    fs.unlink(`./backup/${fileName}`, err => {
      console.log("Deleted",fileName);
    })

  });
  
});