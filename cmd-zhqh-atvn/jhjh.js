const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
const diwr_neig_zjzj = require('../../scripts/diwr_neig_zjzj')
const afdh_rj = require('../auto/func/afdh_rj')
const fo_ussk = require('../../scripts/fo_ussk')
const uzms = require('../../scripts/uzms')
const nikc_out = path.resolve('out')
let vn_per_1 = 70
ngnc_nikc_paaw(nikc_out)
let ji_nq_jhjh = false

const yxna_jhjh_tmp = __dirname + '/test.jhjh.js'

const jhjh = async (user_params = {}, outputs = { outputText }, neig_kp) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const vnwm_tbys_wu = fs.readdirSync(neig.nikc_jhjh_tbys).sort().filter(rn1 => /\b(?:png|jpg|wv)$/.test(rn1))
    function get_tszn_gmtb_rjqt_wu(user_params, neig_kp = {}) {
        const neig = Object.assign({ neig_kp, wl_yoch_fo_ussk_cqpi: (yoch_fo_ussk) => { } }, neig_kp)
        const { wl_yoch_fo_ussk_cqpi } = neig
        const yhld = new fo_ussk([
            ['ll', () => {
                return vnwm_tbys_wu.slice(0, user_params.ll)
            }]
            , ['ud', () => vnwm_tbys_wu.slice(vnwm_tbys_wu.length - user_params.ud)]])
            .set_hqtz('fo')
        wl_yoch_fo_ussk_cqpi(yhld)
        return yhld
            .vdum(user_params)
    }
    diwr_neig_zjzj(neig, ["nikc_jhjh_tbys"])
    outputs.outputText = await (async () => {
        if (user_params._[1] === "off") {
            if (neig.neig_kp.jcbz_jhjh_szas) {

                clearInterval(neig.neig_kp.jcbz_jhjh_szas)
                fs.writeFileSync(yxna_jhjh_tmp, afdh_rj(vn_per_1).rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                setTimeout(() => {
                    delete (neig.neig_kp.jcbz_jhjh_szas)
                }, 500);
                return 'cd taxt.'
            } else if (neig.neig_kp.ji_jhjh_uu) {
                fs.writeFileSync(yxna_jhjh_tmp, afdh_rj(vn_per_1).rj_jhjh_crum)
                neig.engines.execScriptFile(yxna_jhjh_tmp)
                neig.neig_kp.ji_jhjh_uu = false
                return `cd crum jhjh aucc.`
            } else {
                return `hmpc nq jhjh.`
            }
        } else if (user_params._[1] === 'hd') {
            return `tu pk\n${get_tszn_gmtb_rjqt_wu(user_params)
                .map(rn1 => path.join(neig.nikc_jhjh_tbys, rn1))
                .join('\n')}`
        } else if (user_params._[1] === 'get') {
            return new fo_ussk([
                ['tbys', () => {
                    // const vnwm_rjqt_wu = vnwm_tbys_wu//.map(rn1 => path.join(neig.nikc_jhjh_tbys, rn1))
                    const vnwm_rjqt_wu = get_tszn_gmtb_rjqt_wu(user_params, {
                        wl_yoch_fo_ussk_cqpi: (yoch) => yoch.setDefault(() => vnwm_tbys_wu)
                    })
                    outputs.na_ld_html = true
                    const rj_m_d = `## ybkc\n${vnwm_rjqt_wu.map(rn1 => {
                        const yhld_stat = fs.statSync(path.join(neig.nikc_jhjh_tbys, rn1))
                        return `### ${yhld_stat.ctime.toLocaleString()}\n${path.join(neig.nikc_jhjh_tbys, rn1)}\n![](/gmtb/${rn1})`
                    }).join('\n')}`
                    return rj_m_d
                }]
            ]).setDefault(() => uzms('csrf-bi vxn tsjq acun-' + user_params._[2])).vdum(user_params._[2])
        } else if (user_params._[1] === 'yfm') {
            return `uuvo yh.`
        } else if (user_params._[1] === 'uu') {
            if (neig.neig_kp.ji_jhjh_uu) {
                return `cqpi nkme, jhjh aucc cd uu.`
            }
            neig.neig_kp.ji_jhjh_uu = true
            fs.writeFileSync(yxna_jhjh_tmp, afdh_rj(vn_per_1).rj_jhjh_drbz)
            neig.engines.execScriptFile(yxna_jhjh_tmp)
            return `cd zhqh jhjh uu.`
        } else {
            if (!neig.neig_kp.ji_jhjh_uu) {
                return `jhjh aucc ra uu, rt gd zhqh "jhjh uu"`
            }
            if (neig.neig_kp.jcbz_jhjh_szas) {
                return `cqpi soyc, cd nq jhjh yh.`
            }
            if (/^\d+$/.test(user_params._[1]) || user_params.jmaw) {
                vn_per_1 = user_params._[1] || user_params.jmaw || 70
            }
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
            fs.writeFileSync(yxna_jhjh_tmp, afdh_rj(vn_per_1, `(${tbys_wdbu_atvn.toString().replace(/`/g, '\\`').replace(/\$/g, "\\\$")})(yxna_tbys)`).rj_jhjh_szas)
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
                            fs.writeFileSync(yxna_jhjh_tmp, afdh_rj(vn_per_1).rj_tk)
                            neig.engines.execScriptFile(yxna_jhjh_tmp)
                        }
                    } else {
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

