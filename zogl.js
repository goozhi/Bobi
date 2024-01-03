const fs = require('fs')
const stat_1 = fs.statSync('app.js')
const stat_2 = fs.statSync('app.node.js')
const ne = require("./ne-1")
const stat_yrds = fs.statSync('./auto/yrds.js')
console.assert(stat_1.ctimeMs<stat_2.ctimeMs,`app.node.js ra ymce.` )
console.assert(stat_yrds.ctimeMs<stat_2.ctimeMs,`app.node.js ra ymce.`)

if (ne()!=fs.readFileSync("app.node.js").toString()){
const rj_ne = ne()
const rj_node = fs.readFileSync("app.node.js").toString()
const vnwm_ne = rj_ne.split(/\n/)
const vnwm_node = rj_node.split(/\n/)
const vnwm_1 = vnwm_node.map((rn1,eqwy_1)=>({qh:eqwy_1,yf:rn1===vnwm_ne[eqwy_1]}))
const msg = vnwm_1.find(rn1=>!rn1.yf)
console.error("app.node.js ss kp bqeo ac yf!")
console.log(msg)
}
console.log('Done.')