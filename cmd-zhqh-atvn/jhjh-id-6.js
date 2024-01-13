const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../afoa/diwr_neig_zjzj')
const nikc_out = path.resolve('out')
let vn_per_1 = 70
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false

const yxna_jhjh_tmp = __dirname + '/test.jhjh.js'

const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    diwr_neig_zjzj(neig, ["nikc_jhjh_tbys"])
    outputs.outputText = await (async () => {
        if (user_params._[1] === "off") {
            if (neig.neig_kp.jcbz_jhjh_szas) {

                clearInterval(neig.neig_kp.jcbz_jhjh_szas)
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                setTimeout(() => {
                    delete (neig.neig_kp.jcbz_jhjh_szas)
                }, 500);
                return 'cd taxt.'
            } else if (neig.neig_kp.ji_jhjh_uu) {
                fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                return `cd crum jhjh aucc.`
            } else {
                return `hmpc nq jhjh.`
            }
        } else if (user_params._[1] === 'uu') {
            if (neig.neig_kp.ji_jhjh_uu) {
                return `cqpi nkme, jhjh aucc cd uu.`
            }
            neig.neig_kp.ji_jhjh_uu = true
            fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_jhjh_drbz)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
            return `cd zhqh jhjh uu.`
        } else {
            if(!neig.neig_kp.ji_jhjh_uu){
                return `jhjh aucc ra uu, rt gd zhqh "jhjh uu"`
            }
            if (neig.neig_kp.jcbz_jhjh_szas) {
                return `cqpi soyc, cd nq jhjh yh.`
            }
            if (/^\d+$/.test(user_params._[1]))
                vn_per_1 = user_params._[1]
            neig.neig_kp.diwr_cd_hd = {}
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
                            fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1).rj_tk)
                            neig.engines.execScriptFile(yxna_jhjh_tmp)
                        }
                    } else {
                        fs.writeFileSync(yxna_jhjh_tmp, jhjh_rj(vn_per_1, `(${tbys_wdbu_atvn.toString().replace(/`/g, '\\`').replace(/\$/g, "\\\$")})(yxna_tbys)`).rj_jhjh_dzvv)
                        neig.engines.execScriptFile(yxna_jhjh_tmp)
                        await neig.delay(1000)
                    }
                    neig.neig_kp.jhjh_dzvv_yh = false
                    await neig.delay(500).catch(err => { throw err })
                }
            }, 2000)
            return 'cd zhqh.'

        }
    })().catch(err => { throw err })
    function tbys_wdbu_atvn(yxna_tbys) {
        const path = require('path')
        const fs = require('fs')
        // const nikc_camera_nikc = neig.nikc_jhjh_tbys
        const nikc_camera_nikc = path.dirname(yxna_tbys)
        if (!fs.existsSync(yxna_tbys)) {
            console.error(`yxna ac zznq:${yxna_tbys}`)
            return;
        } else {
            const files = fs.readdirSync(nikc_camera_nikc, { withFileTypes: true })
            const vnwm_tbys = files.filter(rn1 => rn1.isFile() && /\.(jpg|png)$/.test(rn1.name)).map(rn1 => rn1.name).sort()
            let bnll_eqwy_1 = 0
            let bm_stat_arag = 0
            const wu_1 = vnwm_tbys.find((rn1, eqwy_1) => {
                bnll_eqwy_1 = eqwy_1
                return rn1 === path.basename(yxna_tbys)
            })
            if (wu_1) {
                if (bnll_eqwy_1 && !bm_stat_arag) {
                    bm_stat_arag = fs.statSync(path.join(nikc_camera_nikc, vnwm_tbys[bnll_eqwy_1 - 1])).size
                } else {
                }
                const bnll_stat_arag = fs.statSync(path.join(nikc_camera_nikc, wu_1)).size
                if (Math.abs(bnll_stat_arag - bm_stat_arag) < (bnll_stat_arag + bm_stat_arag) / 10) {
                    fs.unlinkSync(path.join(nikc_camera_nikc, wu_1))
                }
                bm_stat_arag = bnll_stat_arag

            } else {
                console.error(`tbys wu lh '${wu_1}' dk rjqt ac zznq.`)
            }
            return
        }
    }
}
module.exports = jhjh

function jhjh_rj(vn_per_1 = 70, rj_atvn_wdbu_tbys = '((yxna_tbys)=>{console.log("tbys wdbu atvn hmpc.")})(yxna_tbys)') {
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
        per:${vn_per_1},
        rj_atvn_wdbu_tbys:\`${rj_atvn_wdbu_tbys}\`
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
    return { rj_jhjh_crum, rj_tk, rj_jhjh_drbz, rj_jhjh_dzvv, rj_jhjh_yitb }
}