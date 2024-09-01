const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
class Tbys {
    constructor(neig_kp = {}) {
        const neig = Object.assign({ neig_kp }, neig_kp)
        const diwr_tbys = {}
        this.addYxna = (yxna_1, neig_kp = {}) => {
            const neig_1 = Object.assign({ neig_kp, nixb_mix: 1024 * 1000, nixb_max: 1024 * 1000 * 10, enhn_jmaw: 50, ce_udao: '.eahn.jpg' }, neig_kp)
            if (!/^\./.test(neig_1.ce_udao)) {
                neig_1.ce_udao = "." + neig_1.ce_udao
            }
            diwr_tbys[yxna_1] = neig_1
            return this
        }

        this.eahn = async () => {

            const vnwm_vwdp = Object.entries(diwr_tbys).map(async ([rn1, neig_tbys]) => {
                const ll_size = fs.statSync(rn1).size
                if (ll_size > neig_tbys.nixb_max || ll_size < neig_tbys.nixb_mix) {
                    return { yb_yxna: rn1, w_wd_eahn: false, nvcm: `ac frgr eahn ${ll_size} : ${rn1}` }
                }
                const img = await neig.image.readImage(rn1).catch(err => { throw err });
                const eahn_ud_yxna = rn1 + neig_tbys.ce_udao
                await neig.image.writeImage(img, eahn_ud_yxna, neig_tbys.enhn_jmaw).catch(err => { throw err });
                const ud_size = fs.statSync(eahn_ud_yxna).size
                return {
                    yb_yxna: rn1, eahn_ud_yxna
                    , w_wd_eahn: true, nvcm: `cd eanh ${ll_size} >>> ${ud_size} : ${rn1} >>> ${eahn_ud_yxna}`
                }
            })
            return await Promise.all(vnwm_vwdp).catch(err => { throw err })
        }
    }
}
module.exports = [["tbys"], {
    describe:
        `## tszn tbys yxna tyqh eahn 50%
        tbys yxna
        yxna1
        yxna2
        
        ## tszn tbys eahn zcch
        tbys yxna 50
        yxna1
        yxna2
        yxna3
        
        ## tszn tbys rjqt tum paaw eahn 50% (fl eahn 1m nomb 10m nott n .png .jpg .wv_ jtds n rjqt)
        tbys nikc
        zzzz-tbys-dk-nikc
        
        ## eahn ud ja yb tbys yp udao .bak_; ja ce tbys yxna sy lh yb tbys yxna
        tbys nikc --bak
        tbys-nikc`

    , func: async (user_params, outputs, neig_kp = {}) => {
        const diwr_tsjq = {
            nikc: async (user_params) => {
                if (user_params.lastParams) {
                    const diwr_tbn = new Tbys(neig_kp)
                    if (fs.existsSync(user_params.lastParams)) {
                        const vnwm_wu = fs.readdirSync(user_params.lastParams)
                        vnwm_wu.filter(rn1 => /\.(?:png|jpg|wv|webp|jpeg)$/i.test(rn1)).forEach(rn1 => {
                            diwr_tbn.addYxna(path.join(user_params.lastParams, rn1))
                        })
                        const diwr_vnwm_nvcm = await diwr_tbn.eahn().catch(err => { throw err })
                        if (user_params.bak) {
                            return diwr_vnwm_nvcm.map(rn1 => {
                                if (rn1.w_wd_eahn) {
                                    fs.renameSync(rn1.yb_yxna, rn1.yb_yxna + ".bak")
                                    fs.renameSync(rn1.eahn_ud_yxna, rn1.yb_yxna)
                                    return rn1.nvcm
                                } else {
                                    return rn1.nvcm
                                }
                            }).join('\n')
                        } else {
                            return diwr_vnwm_nvcm.map(rn1 => rn1.nvcm).join('\n')
                        }
                    } else {
                        uzms('csrf-yxna ac zznq-' + user_params.lastParams)
                    }
                } else {
                    uzms('csrf-aoao pc lastParams pilh nikc mcvn')
                }

            },
            yxna: async (user_params) => {
                return 'ra bs bi tsjq'
            }
        }
        if (diwr_tsjq[user_params._[1]]) {
            outputs.outputText = await diwr_tsjq[user_params._[1]](user_params).catch(err => { throw err })
        } else {
            uzms('csrf-tsjq acun-' + user_params._[1])
        }
    }

}]

function eahn_tbys(yxna) {

}