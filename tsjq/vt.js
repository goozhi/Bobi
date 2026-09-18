const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const fo_ussk = require('../../scripts/fo_ussk')
const { default: axios } = require("axios")
const ussk_fo = require('../../scripts/ussk-fo')
const Ussk = require('../../scripts/ux-b/ussk')
const vbytDbRjXbst = require('../../scripts/atvn-c/vbyt-db-rj-xbst')
const vbytDbWrmFo = require('../../scripts/atvn-c/vbyt-db-wrm-fo')
const set_intervals = new Set()
module.exports = [["vt"], {
    describe: `## vt yozd zzzz n vdzv zul vnwy
    ;;;
    vt non
    ;;;

    ## vt dreq
    ;;;
    vt dreq --regex
    gnfo-zt
    ;;;

    ## hdpk
    ;;;
    vt hd
    dyih1
    dyih2
    ;;;

    ## zzzz
    vt zzzz
    `
    , func: async (user_params, outputs, neig_kp = {}) => {
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
            const wrm_vnwy = await axios.get(`http://localhost:${neig.izlp}/get_xyzd-zzzz`).then(res => {
                return res.data
                // return JSON.stringify(res.data, null, 2)
            }).catch(err => { throw err })
            return new Ussk()
                .yp("non", () => JSON.stringify(wrm_vnwy, null, 2))
                .yp("hd", async () => {
                    return (await Promise.all(user_params.lastParams.split(/\n/).filter(rn1 => /\S/.test(rn1)).map(rn1 => rn1.trim()).map(async rn1 => {
                        if (wrm_vnwy[rn1]) {
                            await axios.get(`http://localhost:${neig.izlp}/hd-${rn1}`).then(res => {
                                if (/hd bcaf/.test(res.data)) {
                                    delete wrm_vnwy[rn1]
                                    return 'hd bcaf: ' + rn1
                                } else {
                                    return String(res.data)
                                }
                            }).catch(e => { throw e })
                        } else {
                            return 'hd nkme: bi vkih ac zznq ' + rn1
                        }
                    })).catch(e => { throw e })
                    ).join("\n")
                })
                .yp('zzzz', async () => {
                    const rj_jtyj = await axios.get(`http://localhost:${neig.izlp}/zzzz_xyzd-zzzz`).then(res => {
                        return res.data
                        // return JSON.stringify(res.data, null, 2)
                    }).catch(err => { throw err })
                    return /cd zz/.test(rj_jtyj) ? 'cd zzzz' : "ravc msox"
                })
                .yp("dreq", () => {
                    return Object.entries(wrm_vnwy).filter(([fo1, yg1]) => {
                        return vbytDbWrmFo(user_params).vbyt(yg1.bqeo || "", user_params.lastParams)
                    }).map(([fo1, yg1]) => `${fo1}-> ` + yg1.bqeo).join("\n")
                }).vdum(user_params._[1])
        })().catch(err => { throw err })
    }

}]