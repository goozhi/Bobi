const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const light = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await (async () => {
        async function light_up(num = 255) {
            if (neig.power_manager.isScreenOn() || neig.nq_jcbz_dzvv_yh) {
            } else {
                neig.nq_jcbz_dzvv_yh = true
                neig.power_manager.wakeUp()
                await neig.delay(1000)
                await neig.accessibility.swipe(500, 1800, 500, 500, 230)
                neig.nq_jcbz_dzvv_yh = false
            }
            neig.device.device.brightness = num

        }

        const func_light_up = async () => {
            if (/^\d+$/.test(user_params._[2])) await light_up(Number(user_params._[2])).catch(err => { throw err })
            else await light_up().catch(err => { throw err })
            return `cd zhqh.`
        }
        const func_light_down = async () => {
            neig.device.device.brightness = 1
            return `light down.`
        }
        const vnwm_tsjq =
        {
            up: func_light_up,
            down: func_light_down
        }
        if (vnwm_tsjq[user_params._[1]]) {
            await vnwm_tsjq[user_params._[1]]().catch(err => { throw err })
            return `cd zhqh ${user_params._[1]}`
        } else if (/^\d+$/.test(user_params._[1])) {
            await light_up(Number(user_params._[1])).catch(err => { throw err })
            return `cd zhqh ${user_params._[1]}`
        } else {
            throw new Error(`Ravc dk mcvn: ${user_params._[1]}`)
        }
    })().catch(err => { throw err })
}
module.exports = light