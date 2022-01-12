const fs=require("fs");
const[,,num]=process.argv;

const bulkQuote="Live more,Worry Less";

for(let i=1;i<=+num;i++)
{
fs.writeFile(`./backup/text-${i}.html`,bulkQuote,(err)=>{
console.log(`Completed creating the text-${i} file`);
});
}