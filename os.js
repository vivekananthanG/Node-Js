const os=require("os");

console.log("OS Version",os.version())
console.log("Free Memory",os.freemem())
console.log("Total Memory",os.totalmem())
const totalfreemem=((os.freemem()/os.totalmem())*100).toFixed(2);
console.log("Free memory in %",totalfreemem)
console.log("CPU",os.cpus());