const fs=require("fs");

const bulkQuote="Live more,Worry Less";

for(let i=1;i<=10;i++)
{
fs.writeFile(`./backup/text-${i}.html`,bulkQuote,(err)=>{
console.log(`Completed creating the text-${i} file`);
});
}