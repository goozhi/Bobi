const path=require("path")
const fs=require("fs")
async function wytm(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const nikc_wjdk_agle=path.join(path.dirname(path.resolve()),"wjdk-agle")
    const ytjp_rjwc=require(path.join(nikc_wjdk_agle, "func/ytjp-rjwc.js"))
            const nikc_wytm_ybkc=path.join(path.dirname(path.resolve()),"wjdk-agle/rjwc-wytm")
        if(!fs.existsSync(nikc_wytm_ybkc)){
        throw new Error("nikc ac zznq-"+nikc_wytm_ybkc)
        }
            
    outputs.outputText = (() => {
        if(/^\d+$/.test(user_params._[1])){
        }else if(!user_params.lastParams){
        throw new Error(`hmpc bqeo`)
    }else if(user_params._[1]==="qkyp"){
    const vnwm_rjwc=ytjp_rjwc(nikc_wytm_ybkc)
    if(!vnwm_rjwc.length){
    throw new Error("ybkc lh vv.")
    }
   vnwm_rjwc.sort((a,b)=>{
    return b[1].uufb_zdti.getTime()-a[1].uufb_zdti.getTime()
    })
    vnwm_rjwc[0][1].content+="\n\n"+user_params.lastParams
    fs.writeFileSync(vnwm_rjwc[0][1].yxna_kp,fs.readFileSync(vnwm_rjwc[0][1].yxna_kp).toString().replace(/(content\s*:\s*\`)([\s\S]*)((?<!\\)\`)/,"$1"+vnwm_rjwc[0][1].content+"$3"))
    return "cd qkyp."
    }else{
        const yxna_1=path.join(nikc_wytm_ybkc, new Date().getTime()+".js")
        fs.writeFileSync(yxna_1, `
        module.exports=[
        [],{
        uufb_zdti:new Date("${new Date().toLocaleString()}"),
            content:\`
                ${user_params.lastParams}
        \`

        }
        ]

        `)
        return `cd rrzv ${yxna_1}`
    return 
    }
    })()
}
module.exports = wytm