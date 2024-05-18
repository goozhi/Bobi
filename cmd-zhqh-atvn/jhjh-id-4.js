const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../../scripts/diwr_neig_zjzj')
const nikc_out = path.resolve('out')
let vn_per_1 = 0
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false

const yxna_jhjh_tmp = __dirname + '/test.jhjh.js'

const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ["nikc_jhjh_tbys"])
    outputs.outputText = await (async () => {
        if (user_params._[1] === "off") {
            if (neig.neig_kp.jcbz_jhjh_szas) {

                clearTimeout(neig.neig_kp.jcbz_jhjh_szas)
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                setTimeout(() => {
                    delete (neig.neig_kp.jcbz_jhjh_szas)
                }, 500);
                return 'cd taxt.'
            } else {
                return `hmpc nq jhjh.`
            }
        } else {
            if (/^\d+$/.test(user_params._[1]))
                vn_per_1 = user_params._[1]
            neig.neig_kp.diwr_cd_hd = {}
            if (neig.neig_kp.jcbz_jhjh_szas) {
                return 'cqpi nkme, cd nq jhjh yh.'
            } else {
                if (neig.power_manager.isScreenOn()) {

                } else {
                    if (!/1711/.test(neig.device.device.fingerprint)) {
                        return `Ssvl cd sh kim. Rt gd rssh.`
                    } else {
                        neig.power_manager.wakeUp();
                        await neig.delay(1000).catch(err => { throw err })
                        await neig.accessibility.swipe(500, 1800, 500, 500, 230).catch(err => { throw err })
                    }
                }
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_drbz)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                await neig.delay(2000)
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_dzvv)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                await neig.delay(1000)
                neig.neig_kp.jhjh_uufb_zdti = new Date().getTime()

                neig.neig_kp.jcbz_jhjh_szas = setInterval(async () => {
                    if (neig.neig_kp.jhjh_dzvv_yh) {

                    } else {
                        neig.neig_kp.jhjh_dzvv_yh = true
                        if (neig.neig_kp.nq_jcbz_dzvv_yh) {
                            console.log('pc yndf qwse nq zhqh dzvv yh, ja ac lbm jhjh.')
                            if (neig.neig_kp.dzvv_ssn_fi_bsm) {
                                if (neig.neig_kp.ji_jhjh_tk_uu) {
                                    neig.neig_kp.ji_jhjh_tk_uu = false

                                } else {

                                    neig.neig_kp.ji_jhjh_tk_uu = true
                                }
                                neig.neig_kp.dzvv_ssn_fi_bsm = false
                                fs.writeFileSync(yxna_jhjh_tmp, rj_tk)
                                neig.engines.execScriptFile(yxna_jhjh_tmp)
                            }
                        } else {
                            if (neig.neig_kp.dzvv_yf) {
                                neig.neig_kp.dzvv_yf = false
                            }
                            tbys_wdbu_atvn()
                            // await jhjh_mr_wdbu().catch(err => { throw err })
                        }
                        neig.neig_kp.jhjh_dzvv_yh = false
                        await neig.delay(500).catch(err => { throw err })
                    }
                }, 2000)
                return 'cd zhqh.'
            }

            async function jhjh_mr_wdbu() {
                // neig.auto.launch("com.wrvr.ouss_jhjh")
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_dzvv)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                await neig.delay(2000)
                tbys_wdbu_atvn()
            }
        }
    })().catch(err => { throw err })
    function tbys_wdbu_atvn() {
        const nikc_camera_nikc = neig.nikc_jhjh_tbys
        if (!fs.existsSync(nikc_camera_nikc)) {
            return;
        }
        const files = fs.readdirSync(nikc_camera_nikc, { withFileTypes: true })
        const vnwm_cd_jhjh_tbys = files.filter(rn1 => rn1.isFile && /\.jpg$/.test(rn1.name)).filter(rn1 => {
            const yxna_kp = path.join(nikc_camera_nikc, rn1.name)
            const stat_1 = fs.statSync(yxna_kp)
            if (neig.neig_kp.diwr_cd_hd[yxna_kp]) {
                return false
            }
            if (stat_1.ctimeMs > neig.neig_kp.jhjh_uufb_zdti) {
                return true
            }
        }).map(rn2 => rn2.name).sort()
        let mb_rjqt_arag_1 = 0
        vnwm_cd_jhjh_tbys.forEach(rn1 => {
            const yxna_bnll = path.join(nikc_camera_nikc, rn1)

            const bnll_rjqt_arag = fs.statSync(yxna_bnll).size
            if (Math.abs(bnll_rjqt_arag - mb_rjqt_arag_1) < (bnll_rjqt_arag + mb_rjqt_arag_1) / 10) {
                setTimeout(() => {
                    fs.unlinkSync(yxna_bnll)
                }, 10000);
                if (neig.neig_kp.diwr_cd_hd) {
                    neig.neig_kp.diwr_cd_hd[yxna_bnll] = true
                }
                else {
                    neig.neig_kp.diwr_cd_hd = { yxna_bnll: true }
                }
            }
            mb_rjqt_arag_1 = bnll_rjqt_arag
        })
    }
}
module.exports = jhjh

function jhjh_rj(vn_per_1 = 0) {
    const rj_jhjh_yitb = `importPackage(android.content)
                                function VOUD_AFDH(a, b) {
                                    var i = new Intent(a)
                                    for (var key in b) {
                                        i.putExtra(key, b[key])
                                    }
                                    context.sendBroadcast(i)
                                }
                                `

    const rj_jhjh_dzvv = `${rj_jhjh_yitb}
    VOUD_AFDH("jhjh", {
        per:${vn_per_1}
    })
    
                    `
    const rj_jhjh_crum = `${rj_jhjh_yitb}
                    VOUD_AFDH("jhjh_crum", {
                        per:${vn_per_1}
                    })
    
                                    `
    const rj_jhjh_drbz = `
                                    ${rj_jhjh_yitb}
                                    VOUD_AFDH("jhjh_drbz", {
                                        per:${vn_per_1}
                                    })
                                                    `
    const rj_tk = `${rj_jhjh_yitb}
                                                                                    VOUD_AFDH("tk", {
                                                                                        per:${vn_per_1}
                                                                                    })
                                                                    
                                                                                                    `
    return { rj_jhjh_crum, rj_jhjh_drbz, rj_jhjh_dzvv, rj_jhjh_yitb }
}