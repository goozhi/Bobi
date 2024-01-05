const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const tk = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await (async () => {
        if (!/1711/.test(neig.device.device.fingerprint)) {
            return `nill fl huop 360 ssvl.`
        } else {
            if (neig.neig_kp.nq_jcbz_dzvv_yh) {
                return `pc qwse nq jcbz dzvv yh. bnll sopj cqpi`
            } else {

            }
        }
        await neig.accessibility.accessibility.enableService({
            toast: true
        });
        neig.neig_kp.nq_jcbz_dzvv_yh = true
        if (!neig.power_manager.isScreenOn()) {
            neig.power_manager.wakeUp()
            await neig.delay(1000)
        } else {
            const diwr_ubqt = await neig.accessibility.select({
                packageName: /com\.android\.camera$/,
                className: /android\.widget\.ImageView$/
            }).findFirst({ timeout: 500, maxRetries: 3 }).catch(err => {
                // console.error(err)
            });
            if (diwr_ubqt) {
                neig.neig_kp.dzvv_ssn_fi_bsm = true
                setTimeout(() => {
                    neig.neig_kp.nq_jcbz_dzvv_yh = false
                }, 3000);
                return 'nq jhjh. cd cmfa jhjh tsjq uwuu ssn fi bsm.'
            }
        }
        await neig.accessibility.swipe(500, 10, 500, 500, 230).catch(err => { throw err })
        await neig.delay(500)
        await neig.accessibility.click(691, 415)
        await neig.delay(500)
        await neig.accessibility.swipe(100, 1800, 500, 500, 230)
        neig.neig_kp.nq_jcbz_dzvv_yh = false
        return 'cd zhqh.'
    })().catch(err => { throw err })
}
module.exports = tk