const path = require("path")
const fs = require("fs")
    const nikc_wytm_ybkc = path.join(path.dirname(path.resolve()), "wjdk-agle/rjwc-wytm")
    if (!fs.existsSync(nikc_wytm_ybkc)) {
        throw new Error("nikc ac zznq-" + nikc_wytm_ybkc)
    }

async function wytm(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const nikc_wjdk_agle = path.join(path.dirname(path.resolve()), "wjdk-agle")
    const ytjp_rjwc = require(path.join(nikc_wjdk_agle, "func/ytjp-rjwc.js"))
     function undo_atvn(){
          fs.writeFileSync(neig.neig_kp.wytm_ybkc.yxna,neig.neig_kp.wytm_ybkc.content_kp)
     }
    outputs.outputText = (() => {
        if (/^\d+$/.test(user_params._[1])) {
        } else if (user_params._[1] === "undo") {
                if(neig.neig_kp.wytm_ybkc){
                const diwr_mcvn_1={
                qkyp:undo_atvn,
                ngnc:()=>{
                fs.unlinkSync(neig.neig_kp.wytm_ybkc.yxna)
                }
                }
                const cqpi_fr_1=neig.neig_kp.wytm_ybkc.cqpi
                if(diwr_mcvn_1[cqpi_fr_1]){
                
                diwr_mcvn_1[cqpi_fr_1]()
                neig.neig_kp.wytm_ybkc.cqpi="undo"
                 return `undo ${cqpi_fr_1}`
                }else{
                throw new Error(`cqpi fr acun: ${cqpi_fr_1}`)
                }
                               
                }else{
                    return "nothing could undo."
                }
        } else if (user_params._[1] === "see") {
            const vnwm_rjwc = ytjp_rjwc(nikc_wytm_ybkc)
            if (!vnwm_rjwc.length) {
                throw new Error("ybkc lh vv.")
            }
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
                    .map(rn1 => rn1[1].uufb_zdti.toLocaleString() + (user_params.yxna?"----" + rn1[1].yxna_kp:"") + ":\n    " + rn1[1].content.trim())
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
            const vnwm_rjwc = ytjp_rjwc(nikc_wytm_ybkc)
            if (!vnwm_rjwc.length) {
                throw new Error("ybkc lh vv.")
            }
            vnwm_rjwc.sort((a, b) => {
                return b[1].uufb_zdti.getTime() - a[1].uufb_zdti.getTime()
            })
            vnwm_rjwc[0][1].content += "\n\n" + user_params.lastParams
            neig.neig_kp.wytm_ybkc={
            cqpi:"qkyp",
            yxna:vnwm_rjwc[0][1].yxna_kp,
            content_kp:fs.readFileSync(vnwm_rjwc[0][1].yxna_kp).toString(),
            content_ce:vnwm_rjwc[0][1].content
            }
            fs.writeFileSync(vnwm_rjwc[0][1].yxna_kp, fs.readFileSync(vnwm_rjwc[0][1].yxna_kp).toString().replace(/(content\s*:\s*\`)([\s\S]*)((?<!\\)\`)/, "$1" + vnwm_rjwc[0][1].content + "$3"))
            return "cd qkyp."
        } else if(user_params._[1]==="date") {
            return ukyp(user_params._[2],user_params.lastParams)
        } else if(user_params._[1]) {
        throw new Error("mcvn acun: "+user_params._[1])
        } else {
return             ukyp(new Date().toLocaleString(),user_params.lastParams)

        }
    })()
    function ukyp(date, bqeo){
            try{
            new Date(date)
            }catch(err){
            throw new Error("zdti brtz msox: "+date)
            }
            const yxna_1 = path.join(nikc_wytm_ybkc, new Date().getTime() + ".js")
            fs.writeFileSync(yxna_1, `
        module.exports=[
        [],{
        uufb_zdti:new Date("${String(date).replace(/^\s*\"|\"\s*$/g,"")}"),
            content:\`
                ${bqeo.replace(/\\/g,"\\\\").replace(/`/g,"\\`")
                .replace(/(\$\{)\\`([\s\S]*?)\\`(\s*\})/g, "$1`$2`$3")}
        \`

        }
        ]

        `)
                neig.neig_kp.wytm_ybkc={
        cqpi:"ngnc",
        yxna:yxna_1
        }
                    return `cd rrzv ${yxna_1}`
}
}
module.exports = wytm