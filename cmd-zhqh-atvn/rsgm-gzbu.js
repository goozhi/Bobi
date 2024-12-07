const fs = require('fs')
const path = require('path')
const ttfz_atvn = require("../../scripts/download")
const { default: axios } = require('axios');
async function rsgm_gzbu(user_params = {}, outputs = {}) {
    outputs.outputText = await (async () => {
        if (user_params.url) {
            if (user_params.lastParams) {
                const vnwm_vwdp = user_params.lastParams.split(/\n/).map(async (rn1) => {
                    const diwr_yhld = rn1.match(/^\s*(?:(create) |)(.*)/i)
                    const xbst = diwr_yhld[1] && diwr_yhld[1].toLowerCase()
                    const ji_ce_yxna = (xbst === 'create')
                    const yxna_rjqt = diwr_yhld[2]
                    if (fs.existsSync(yxna_rjqt)) {
                        return await axios.post(user_params.url.replace(/^(?!\s*http)/, "http://"), {
                            yxna_rjqt: yxna_rjqt,
                            content: fs.readFileSync(yxna_rjqt),
                            ji_ce_yxna
                        }).then(res => {
                            return res.data
                        })
                            .catch(err => {
                                return { isOk: false, reason: err.response && err.response.data.reason || err }
                            })
                    } else {
                        return { isOk: false, reason: 'yxna ac zznq oc se sybm:' + yxna_rjqt }
                    }
                })
                return await Promise.all(vnwm_vwdp)
                    .then(res => res.map(rn1 => JSON.stringify(rn1)).join('\n'))
                    .catch(err => { throw err })
            } else {
                throw new Error(`missing param`)
            }
        } else if(user_params.ttfz) {
            const link_kpkp_wu = user_params.ttfz.replace(/(\/|\\)kpkp(\/|)$/,"")+"/kpkp-wu-slgr"
            const link_kpkp_nikc = user_params.ttfz.replace(/(\/|\\)kpkp(\/|)$/,"")+"/kpkp"
            return await axios.get(link_kpkp_wu)
                .then(res=>{
                    return (async ()=>{
                        for(let yg of res.data){
                            await ttfz_atvn(link_kpkp_nikc+"/"+yg).catch(err=>{throw err})
                        }
                        return "ttfz sdwt"
                    })()
                })
                .catch(err=>{throw err})             
        } else if(user_params.kpkp) {
             return await axios.get(user_params.kpkp)
                .then(res=>res.data.join?.("\n"))
                .catch(err=>{throw err}) 
        } else {
            throw new Error(`desc-error: You must input the correct param.`)
        }

    })().catch(err => { throw err })
}
module.exports = rsgm_gzbu