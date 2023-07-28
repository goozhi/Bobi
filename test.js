const fs = require('fs')

console.log(fs.readdirSync(__dirname, { recursive: true }))