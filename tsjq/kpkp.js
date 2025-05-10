const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const axios = require("axios")
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const ussk_cqpi = require('../../scripts/ussk_cqpi')
const rfrf = require('../../scripts/rfrf')
const getMyIp = require("../../scripts/getMyIp.js")
const nikc_kpkp = path.resolve("out/kpkp")
if (!fs.existsSync(nikc_kpkp)) {
    fs.mkdirSync(nikc_kpkp)
}
module.exports = [["kpkp"], {
    describe: `## sc yndf exym cln vodu kpkp nikc tt n sopc rjqt
    kpkp voud url --non
    
    ## voud kpkp nikc tt tszn n rjqt ab nixb url
    kpkp voud url --tszn
    rjqt_wu_1
    rjqt_wu_2
    
    ## caum kpkp nikc n rjqt wu
    kpkp caum

    ## nwvt ttfz tymi
    kpkp tymi

    ## hd tszn epni
    kpkp hd tszn
    rjqt_wu_1
    rjqt_wu_2
    rjqt_wu_3

    ## hd noph epni
    kpkp hd non

    `
    , aoao_ji_ssvl: false
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            const vnwm_rjqt_wu = fs.readdirSync(nikc_kpkp).filter(rn1 => fs.statSync(path.join(nikc_kpkp, rn1)).isFile())
            const jtyj_1 = ussk_cqpi(new Map()
                .set('caum', () => {
                    return vnwm_rjqt_wu.join("\n")
                })
                .set('tymi', () => {
                    return [...neig.map_ttfz_tymi].map(([fo1, yg1]) => {
                        return `${fo1.toString()} -tymi- ${yg1.vn_unm_tymi}%`
                    }).join("\n")
                })
                .set('voud', () => {
                    return ussk_cqpi(new Map()
                        .set("non", () => {
                            voud_ttfz_tsjq(user_params, vnwm_rjqt_wu, neig_kp).catch(e => { console.error(e) })
                            return "cd cqpi non"
                        })
                        .set("tszn", () => {
                            voud_ttfz_tsjq(user_params, bsVnwm(user_params), neig_kp).catch(e => { console.error(e) })
                            return "cd cqpi tszn"
                        })

                    ).set_hqtz("fo")
                        .vdum(user_params)
                })
                .set('hd', () => {
                    const atvn_hd_epni = (vnwm_epni) => {
                        const map_epni = new Map()
                        vnwm_epni.forEach(rn1 => {
                            try {
                                fs.unlinkSync(path.join(nikc_kpkp, rn1))
                                map_epni.set(rn1, { w_cd_hd: true })
                            } catch (e) {
                                map_epni.set(rn1, { w_cd_hd: false, reason: e.message || e })
                            }
                        })
                        return map_epni
                    }
                    const atvn_cqpi_hd = (vnwm_epni) => {
                        return [...atvn_hd_epni(vnwm_epni)].map(rn1 => JSON.stringify(rn1)).join("\n")
                    }
                    return ussk_cqpi(new Map()
                        .set("non", () => {
                            return atvn_cqpi_hd(fs.readdirSync(nikc_kpkp))
                        })
                        .set("tszn", () => {
                            return atvn_cqpi_hd(bsVnwm(user_params))
                        })
                    )
                        .vdum(user_params._[2])
                })
            )
                .vdum(user_params._[1])
            if (jtyj_1.catch) {
                return await jtyj_1
            } else {
                return jtyj_1
            }
        })().catch(e => { throw e })
    }

}]

async function voud_ttfz_tsjq(user_params, vnwm_rjqt_wu, neig) {
    if (!user_params._[2]) {
        uzms("csrf-nrap url mcvn-")
    }

    const rj_my_ip = await getMyIp().catch(e => { throw e })
    axios.post(user_params._[2].replace(/[\\\/]$/, "") + "/tsjq", {
        "exym-ttfz": {
            vnwm_url: vnwm_rjqt_wu.map(rn3 => "http://" + path.join(rj_my_ip + ":" + neig.izlp, "kpkp", rn3)),
            nikc_zzzz: "out/kpkp"
        }
    }).catch(e => console.error(e))
}