const os = require("os");
const { kill } = require("process");
const user = os.userInfo();

console.log(user)

const uptime = os.uptime();
console.log(uptime) // in seconds

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)