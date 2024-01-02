const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const blackNameListPath = path.join(nikc_out, 'blackNameList.txt')
const light = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = (() => {
        const rj_light_up = `
        if(device.isScreenOn()){

        }else{
            device.wakeUp()
            sleep(1000)                
            swipe(500, 1800, 10, 500, 700)
        }
        device.setBrightness(100)    
        `
        const rj_light_down = `
        device.setBrightness(1)
        `
        const vnwm_tsjq =
        {
            up: rj_light_up,
            down: rj_light_down
        }
        if (vnwm_tsjq[user_params._[1]]) {
            fs.writeFileSync('out/tmp.js', vnwm_tsjq[user_params._[1]])

            neig.engines.execScriptFile('out/tmp.js')
            return `cd zhqh ${user_params._[1]}`
        } else {
            throw new Error(`Ravc dk mcvn: ${user_params._[1]}`)
        }
    })()
}
module.exports = light