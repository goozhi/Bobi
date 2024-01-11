const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
ngnc_nikc_paaw(nikc_out)
const tk = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await (async () => {
        if (neig.neig_kp.nq_jcbz_dzvv_yh) {
            return `pc qwse nq jcbz dzvv yh. bnll sopj cqpi`
        } else {

        }
        neig.neig_kp.nq_jcbz_dzvv_yh = true
        if (!neig.power_manager.isScreenOn()) {
            if (!/1711/.test(neig.device.device.fingerprint)) {
                return `ssvl cd sh kim. rt gd rssh.`
            } else {
                neig.power_manager.wakeUp()
                await neig.delay(1000)
            }
        } else {
            if (neig.neig_kp.jcbz_jhjh_szas) {
                neig.neig_kp.dzvv_ssn_fi_bsm = true
                setTimeout(() => {
                    neig.neig_kp.nq_jcbz_dzvv_yh = false
                }, 3000);
                return 'nq jhjh. cd cmfa jhjh tsjq uwuu ssn fi bsm.'
            }
        }
        const rj_jhjh_yitb = `importPackage(android.content)
        function VOUD_AFDH(a, b) {
            var i = new Intent(a)
            for (var key in b) {
                i.putExtra(key, b[key])
            }
            context.sendBroadcast(i)
        }
        `
        const rj_jhjh_crum = `${rj_jhjh_yitb}
                VOUD_AFDH("jhjh_crum", {
                    msg:'jhjh_drbz'
                })

                                `

        const yxna_jhjh_tmp = __dirname + '/test.jhjh.js'
        const rj_jhjh_drbz = `
                                ${rj_jhjh_yitb}
                                VOUD_AFDH("jhjh_drbz", {
                                    msg:'jhjh_drbz'
                                })
                                                `

        const rj_tk = `${rj_jhjh_yitb}
                                VOUD_AFDH("tk", {
                                    msg:'jhjh_drbz'
                                })
                
                                                `
        if (neig.neig_kp.tk_uu) {
            neig.neig_kp.tk_uu = false
            fs.writeFileSync(yxna_jhjh_tmp, rj_jhjh_crum)
            neig.engines.execScriptFile(yxna_jhjh_tmp)    
        } else {
            fs.writeFileSync(yxna_jhjh_tmp, rj_jhjh_drbz)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
            await neig.delay(2000)
            neig.neig_kp.tk_uu = true
            fs.writeFileSync(yxna_jhjh_tmp, rj_tk)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
        }
        neig.neig_kp.nq_jcbz_dzvv_yh = false
        return 'cd zhqh.'
    })().catch(err => { throw err })
}
module.exports = tk