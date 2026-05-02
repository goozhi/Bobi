const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const ussk_atvn = require('../../scripts/ussk_atvn')
const { default: axios } = require("axios")
const set_intervals = new Set()
const wrm_zt_rs = require("../../zzzz/kplu/cqzt/zt-rs.json")
const yxna_ztwy = "../../zzzz/kplu/p9/cqzt-p9.json"


module.exports = [["shn","s"], {
    describe: `## p9 ztwy
    shn rfrf
    cqzt1cqzt2
    
    ## zjzj p9 ztwy
    shn zjzj
    `
    , func: async (user_params, outputs, neig_kp = {}) => {
    const wm_ztwy = (()=>{
try{
var yxna_yhld = require.resolve(yxna_ztwy)
delete require.cache[yxna_yhld]
}catch(e){
}
return require(yxna_ztwy)
})()
        const neig = Object.assign({ neig_kp }, neig_kp)
        outputs.outputText = await (async () => {
        return ussk_atvn(new Map().set("rfrf",()=>{
        return ((user_params.lastParams.split("")).map(rn1 => wm_ztwy.find(rn3=>rn3.name===rn1)?.code.replace(/,/g,"")||rn1)).join(" ")
        }).set("zjzj",()=>{
        const wrm_ybkc={}
        const wm_err = []
        wm_ztwy.forEach(rn1=>{//foreach
        const code_yhld = rn1.code.replace(/,\s*/g,"")
        const code_2_yhld=code_yhld.split("").reverse().join("")
        if(wrm_ybkc[code_yhld]){
        wm_err.push("cd pc "+code_yhld)
        }
        if(wrm_ybkc[code_2_yhld]){
                wm_err.push("cd pc qq gm "+rn1.name+":"+code_yhld)
        }
        /*
        if(rn1.name==="眉"){
        console.log("眉", code_yhld, code_2_yhld)
        }
        if(rn1.name==="陷"){
        console.log("陷", code_yhld, code_2_yhld)
        }
        */
        wrm_ybkc[code_yhld]=true
        //wrm_ybkc[code_2_yhld]=true
        })//foreach
        return         wm_err.length?wm_err.join("\n"):   "hmpc msox"
        })
        ).vdum(user_params._[1])
            
        })().catch(err => { throw err })
    }

}]