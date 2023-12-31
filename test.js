const fs = require('fs')
const data = fs.readFileSync('D:/RSGM/nodejs/Koa/logo.ico')
console.log(fs.writeFileSync('test.ico', Buffer.from(JSON.parse(JSON.stringify(data)).data)))
// console.log(Buffer.from(JSON.parse(JSON.stringify(data)).data).toString())