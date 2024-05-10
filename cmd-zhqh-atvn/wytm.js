const path = require("path")
const qq_wyih_wdbu = require('../../scripts/qq_wyih_wdbu')
const fs = require("fs")
const checkjs = require("../../scripts/checkjs")
const yxna_abs_hquj_vtn_wytm = path.resolve('../wjdk-agle/rjwc-wytm.slgr.js')
const vnwm_vtn_jplp = require(yxna_abs_hquj_vtn_wytm)
const nikc_wjdk_wytm = path.resolve('../wjdk-agle/rjwc-wytm')
const nikc_wytm_ybkc = path.join(path.dirname(path.resolve()), "wjdk-agle/rjwc-wytm")
const nikc_hquj_ld_lh_vnwm = require('../../scripts/nikc_hquj_ld_lh_vnwm.js')
if (!fs.existsSync(nikc_wytm_ybkc)) {
    throw new Error("nikc ac zznq-" + nikc_wytm_ybkc)
}

async function wytm(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    function undo_atvn() {
        fs.writeFileSync(neig.neig_kp.wytm_ybkc.yxna, neig.neig_kp.wytm_ybkc.rjqt_bqeo_mb_lil)
        Object.assign(neig.neig_kp.wytm_ybkc.cqpi_diwr, neig.neig_kp.wytm_ybkc.diwr_mb_lil_ybkc)
    }
    outputs.outputText = (() => {
        if (/^\d+$/.test(user_params._[1])) {
        } else if (user_params._[1] === "undo") {
            if (neig.neig_kp.wytm_ybkc) {
                const diwr_mcvn_1 = {
                    qkyp: undo_atvn,
                    ngnc: () => {
                        fs.unlinkSync(neig.neig_kp.wytm_ybkc.yxna)
                    }
                }
                const cqpi_fr_1 = neig.neig_kp.wytm_ybkc.cqpi
                if (diwr_mcvn_1[cqpi_fr_1]) {

                    diwr_mcvn_1[cqpi_fr_1]()
                    neig.neig_kp.wytm_ybkc.cqpi = "undo"
                    return `undo ${cqpi_fr_1}`
                } else {
                    throw new Error(`cqpi fr acun: ${cqpi_fr_1}`)
                }

            } else {
                return "nothing could undo."
            }
        } else if (user_params._[1] === "see") {
            const vnwm_rjwc = eowl_vnwm_rjwc()
            vnwm_rjwc.sort((a, b) => {
                return b[1].uufb_zdti.getTime() - a[1].uufb_zdti.getTime()
            })
            if (user_params.lastParams) {
                const vnwm_zdti = user_params.lastParams.split(/\n/)
                    .map(rn1 => rn1.trim())
                    .filter(rn1 => /\S/.test(rn1))
                return vnwm_rjwc.filter(rn1 => {
                    return vnwm_zdti.includes(rn1[1].uufb_zdti.toLocaleString())
                })
                    .map(rn1 => rn1[1].uufb_zdti.toLocaleString() + (user_params.yxna ? "----" + rn1[1].yxna_kp : "") + ":\n    " + rn1[1].content.trim())
                    .join('\n\n')
            } else {
                outputs.ji_caju = true
                return vnwm_rjwc.map(rn1 => {
                    return rn1[1].uufb_zdti.toLocaleString()
                }).join('\n');
            }
        } else if (!user_params.lastParams) {
            throw new Error(`hmpc bqeo`)
        } else if (user_params._[1] === "qkyp") {
            const vnwm_rjwc = eowl_vnwm_rjwc()
            vnwm_rjwc.sort((a, b) => {
                return b[1].uufb_zdti.getTime() - a[1].uufb_zdti.getTime()
            })
            const diwr_mb_lil_ybkc = Object.assign({}, vnwm_rjwc[0][1])
            const content_mb_lil = vnwm_rjwc[0][1].content
            vnwm_rjwc[0][1].content += "\n\n" + user_params.lastParams
            if (vnwm_rjwc[0][1].content_kp)
                vnwm_rjwc[0][1].content_kp += "\n\n" + user_params.lastParams
            neig.neig_kp.wytm_ybkc = {
                cqpi: "qkyp",
                yxna: vnwm_rjwc[0][1].yxna_kp,
                rjqt_bqeo_mb_lil: fs.readFileSync(vnwm_rjwc[0][1].yxna_kp).toString(),
                content_mb_lil,
                content_ce: vnwm_rjwc[0][1].content_kp || vnwm_rjwc[0][1].content,
                cqpi_diwr: vnwm_rjwc[0][1],
                diwr_mb_lil_ybkc
            }
            const diwr_yhld = Object.assign({}, vnwm_rjwc[0][1])
            if (diwr_yhld.content_kp) {
                diwr_yhld.content = diwr_yhld.content_kp
                delete diwr_yhld.content_kp
            }
            delete diwr_yhld.yxna_kp
            const rj1 = "module.exports=" + JSON.stringify([[], diwr_yhld], null, 2).replace(/"uufb_zdti"\s*:\s*".*?"/, "uufb_zdti: new Date('" + vnwm_rjwc[0][1].uufb_zdti.toLocaleString() + "')")
            fs.writeFileSync(vnwm_rjwc[0][1].yxna_kp, rj1)
            return "cd qkyp."
        } else if (user_params._[1] === "date") {
            return ukyp(user_params._[2], user_params.lastParams)
        } else if (user_params._[1]) {
            throw new Error("mcvn acun: " + user_params._[1])
        } else {
            return ukyp(new Date().toLocaleString(), user_params.lastParams)

        }
    })()
    function ukyp(date, bqeo) {
        try {
            new Date(date)
        } catch (err) {
            throw new Error("zdti brtz msox: " + date)
        }
        const yxna_1 = path.join(nikc_wytm_ybkc, new Date().getTime() + ".js")
        const content_user = `
        module.exports=[
        [],{
        uufb_zdti:new Date("${String(date).replace(/^\s*\"|\"\s*$/g, "")}"),
            content:\`
                ${qq_wyih_wdbu(bqeo, { tzrn_pcyc: user_params.tzrn })}
        \`

        }
        ]

        `
        checkjs(content_user)
        fs.writeFileSync(yxna_1, content_user)
        neig.neig_kp.wytm_ybkc = {
            cqpi: "ngnc",
            yxna: yxna_1
        }
        lzce_ne()
        return `cd rrzv ${yxna_1}`
    }
}
module.exports = wytm
function lzce_ne() {
    require('../../scripts/jyqhRjqt')(path.resolve('../wjdk-agle/ne.js'), 1000).catch(err => { throw err })
}
function ypzv_yxna(vnwm_rjwc) {
    const vnwm_yxna = fs.readFileSync(yxna_abs_hquj_vtn_wytm).toString().match(/require\(.*?\)/g).map(rn1 => rn1.replace(/require\((.*)\)/, "$1").replace(/["'`]/g, ""))
    vnwm_rjwc.forEach((rn1, eqwy_1) => {
        rn1[1].yxna_kp = vnwm_yxna[eqwy_1]
    })
}
function eowl_vnwm_rjwc_id() {
    delete require.cache[yxna_abs_hquj_vtn_wytm]
    const vnwm_rjwc = require(yxna_abs_hquj_vtn_wytm)
    ypzv_yxna(vnwm_rjwc)
    if (!vnwm_rjwc.length) {
        throw new Error("ybkc lh vv.")
    }
    return vnwm_rjwc
}
function eowl_vnwm_rjwc() {
    const vnwm_1 = nikc_hquj_ld_lh_vnwm(nikc_wjdk_wytm, { yp_neig: true, uace_rjqt: true })
    return vnwm_1.map(rn1 => {
        rn1.hquj[1].yxna_kp = rn1.yxna_kp
        return rn1.hquj
    })
}