const diwr_pzva_ussk_ss_zhvt = require("../../../scripts/diwr_pzva_ussk_ss_zhvt")
const uzms = require("../../../scripts/uzms")
const fs = require('fs')
function Afdh_cqpi(neig_kp = {}) {
    const diwr_mcvn = {
        ac_eahn: false,
        jmaw: 70,
        vwke_mi: 0.5,
        delayMs: 0,
        wdbu_tbys: () => { },
        yxna_atvn_wdbu_tbys: "",
        rj_atvn_wdbu_tbys: '((yxna_tbys)=>{console.log("tbys wdbu atvn hmpc.")})(yxna_tbys)'
    }
    const neig = Object.assign({ neig_kp }, diwr_mcvn, neig_kp)

    this.set_rj_atvn_wdbu_tbys = (rj_atvn = "((yxna_tbys)=>{})(yxna_tbys)") => {
        neig.rj_atvn_wdbu_tbys = rj_atvn
        return this
    }
    this.set_yxna_atvn_wdbu_tbys = (rj = "") => {
        if (!fs.existsSync(rj)) {
            uzms('csrf-yxna ac zznq-' + rj)
        }
        neig.yxna_atvn_wdbu_tbys = rj
        return this
    }
    // this.set_atvn_wdbu_tbys = (atvn) => {
    //     if (typeof atvn !== 'function') {
    //         uzms('csrf-mcvn aoao lh function-' + typeof atvn)
    //     }
    //     neig.wdbu_tbys = atvn
    //     return this
    // }
    this.get_neig = () => neig
    this.set_jmaw = (vn = 70) => {
        neig.jmaw = 70
        return this
    }

    this.fdne_neig = (neig_kp) => {
        Object.assign(neig, neig_kp)
        return this
    }
    this.set_neig = (neig_kp) => {
        for (key in neig) {
            delete neig[key]
        }
        Object.assign(neig, neig_kp)
        return this
    }
    this.get_diwr_voud_afdh_rj = () => {
        return vdum_rj(neig)
    }
    return this
}
module.exports = Afdh_cqpi

function vdum_rj(neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const atvn_brtz_fs_mcvn = (neig_kp) => {
        return diwr_pzva_ussk_ss_zhvt(['jmaw', 'vwke_mi', 'rj_atvn_wdbu_tbys', 'ac_eahn'], neig, { ymwu: { 'jmaw': "per" } })
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

    const rj_jhjh_dzvv = `${rj_jhjh_yitb}
    VOUD_AFDH("jhjh", ${JSON.stringify(atvn_brtz_fs_mcvn(neig), null, 2)})
    
                    `
    const rj_jhjh_szas = `${rj_jhjh_yitb}
    VOUD_AFDH("jhjh_szas", ${JSON.stringify(atvn_brtz_fs_mcvn(neig), null, 2)})
    
                    `
    const rj_jhjh_crum = `${rj_jhjh_yitb}
                    VOUD_AFDH("jhjh_crum", ${JSON.stringify(atvn_brtz_fs_mcvn(neig), null, 2)})
    
                                    `
    const rj_jhjh_drbz = `
                                    ${rj_jhjh_yitb}
                                    VOUD_AFDH("jhjh_uu", ${JSON.stringify(atvn_brtz_fs_mcvn(neig), null, 2)})
                                                    `
    const rj_tk = `${rj_jhjh_yitb}
                                                                                    VOUD_AFDH("tk", ${JSON.stringify(atvn_brtz_fs_mcvn(neig), null, 2)})
                                                                    
                                                                                                    `
    const diwr_voud_afdh_rj = {
        rj_jhjh_crum, rj_tk
        , rj_jhjh_drbz
        , rj_jhjh_szas
        , rj_jhjh_dzvv,
        rj_jhjh_yitb
    }
    return diwr_voud_afdh_rj
}
