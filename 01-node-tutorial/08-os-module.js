const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} second`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freeMem(),
}

console.log(currentOS)