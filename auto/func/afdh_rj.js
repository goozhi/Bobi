function afdh_rj(vn_per_1 = 70, rj_atvn_wdbu_tbys = '((yxna_tbys)=>{console.log("tbys wdbu atvn hmpc.")})(yxna_tbys)') {
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
    const rj_jhjh_szas = `
    ${rj_jhjh_yitb}
    VOUD_AFDH("jhjh_szas", {
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
                                    VOUD_AFDH("jhjh_uu", {
                                        per:${vn_per_1}
                                    })
                                                    `
    const rj_tk = `${rj_jhjh_yitb}
                                                                                    VOUD_AFDH("tk", {
                                                                                        per:${vn_per_1}
                                                                                    })
                                                                    
                                                                                                    `
    return {
        rj_jhjh_crum, rj_tk
        , rj_jhjh_drbz
        , rj_jhjh_szas
        , rj_jhjh_dzvv,
        rj_jhjh_yitb
    }
}
module.exports = afdh_rj