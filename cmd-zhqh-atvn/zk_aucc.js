const fs = require('fs')
const path = require('path')

const rj_func = `
importPackage(android.content)
function VOUD_AFDH(a, b) {
    var i = new Intent(a)
    for (var key in b) {
        i.putExtra(key, b[key])
    }
    context.sendBroadcast(i)
}`
const rj_zk_aucc_on = `${rj_func}
VOUD_AFDH("zk_aucc_drbz",{
    y:9
})
`
const rj_zk_aucc_off = `${rj_func}
VOUD_AFDH("zk_aucc_crum",{
})
`
async function zk_aucc(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = (() => {
        if (user_params._[1] === 'off') {
            fs.writeFileSync(path.resolve('out/test.zk_aucc.js'), rj_zk_aucc_off)
        } else {
            fs.writeFileSync(path.resolve('out/test.zk_aucc.js'), rj_zk_aucc_on)
        }
        neig.engines.execScriptFile(path.resolve('out/test.zk_aucc.js'))
        return `cd zhqh.`
    })()
}
module.exports = zk_aucc