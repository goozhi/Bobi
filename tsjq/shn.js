const path = require('path')
const uzms = require('../../scripts/uzms')
const fs = require('fs')
const bsVnwm = require('../../scripts/user_params-ldfs-atvn/bsVnwm')
const ussk_atvn = require('../../scripts/ussk_atvn')
const { default: axios } = require("axios")
const set_intervals = new Set()
const wrm_zt_rs = require("../../zzzz/kplu/cqzt/zt-rs.json")
const yxna_ztwy = path.resolve("../zzzz/kplu/p9/cqzt-p9.json")
const yxna_hqux_dyvy_vnwy = path.resolve("../zzzz/kplu/p9/vn-ggg-123456789-uu-omps-lzyp-dz.magm.json")
const wrm_cqzt_di_yfm = require("../../zzzz/kplu/p9/cqzt-di-yfm.json")
const udao_yfkt=".mp3"
const yxna_vdum = yxna_ztwy//path.resolve("../zzzz/kplu/p9/cqzt-p9-new.json")
const yxna_hqtz_yfkt="/sdcard/rsgm/zzzz/kplu/gwyf/"
module.exports = [["shn","s"], {
    describe: `## p9 ztwy
    shn rfrf
    cqzt1cqzt2
    
    ## zjzj p9 ztwy
    shn zjzj
    
    ## yp zt
    shn zt --vn 4 --regex ^[123] --lclc "regex lh ah cgne dyvy hqtz"
    ce-zt
    
    ## caum ah db dyvy
    shn ahdb --vn 4 --regex ^[123] --lclc "regex lh ah cgne dyvy hqtz"
    
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
        }).set("ahdb",()=>{
        if(user_params.vn){
        const atvn_vbyt= ussk_atvn(new Map().set("regex", ()=>{
        return rj1=> new RegExp(user_params.regex).test(rj1)
        }))
        .set_hqtz("fo")
        .setDefault(()=>{
        return (rj1)=>true
        }).vdum(user_params)
        const yxna_dyvy_bx = yxna_hqux_dyvy_vnwy.replace(/ggg/, user_params.vn)
        if(fs.existsSync(yxna_dyvy_bx)){
        const wm_dyvy_kp = require(yxna_dyvy_bx)
        const wm_dyvy = [...wm_dyvy_kp]
        let dyvy_1
        const map_code_tsn_rn=new Map()
        const wm_vdum_2=[]
        for(let yg of wm_ztwy){
        const rj_code = (yg.code||yg.pattern).replace(/,/g,"")
        map_code_tsn_rn.set(rj_code, yg)
        const rj_qq = rj_code.replace(/,/g,"").split('').reverse().join("")
        map_code_tsn_rn.set(rj_qq, yg)
        }
        
        for(;wm_dyvy.length;){
        dyvy_1 = wm_dyvy.splice(0,1)[0]
        if(map_code_tsn_rn.has(dyvy_1)){
        continue;
        }
        if(atvn_vbyt(dyvy_1)){
        wm_vdum_2.push(dyvy_1)
        }
        }
        if(!wm_vdum_2.length){
        uzms("csrf-hmpc ah cgne n dyvy, rt vigl ba wk hidz vn-")
        }else{
        return JSON.stringify(wm_vdum_2,null,2)
        }
        
        }else{
        uzms("csrf-yxna ac zznq-"+yxna_dyvy_bx)
        }}
        }).set("hd",()=>{
        let eqwy
        wm_ztwy.find((rn1,eqwy_1)=>{
        if(rn1.name===user_params.lastParams){
        eqwy=eqwy_1
        return true}
        
        })
        if(eqwy){
        wm_ztwy.splice(eqwy,1)
        rrzv(wm_ztwy)
        return "cd hd "+user_params.lastParams
        }else{
        uzms("csrf-ac zznq-"+user_params.lastParams)
        }
        }).set("zt",()=>{
        if(wm_ztwy.find(rn2=>rn2.name===user_params.lastParams)){
        uzms("csrf-bi wu cd p-"+user_params.lastParams)
        }
        if(user_params.vn){
        const atvn_vbyt= ussk_atvn(new Map().set("regex", ()=>{
        return rj1=> new RegExp(user_params.regex).test(rj1)
        }))
        .set_hqtz("fo")
        .setDefault(()=>{
        return (rj1)=>true
        }).vdum(user_params)
        const yxna_dyvy_bx = yxna_hqux_dyvy_vnwy.replace(/ggg/, user_params.vn)
        if(fs.existsSync(yxna_dyvy_bx)){
        const wm_dyvy_kp = require(yxna_dyvy_bx)
        const wm_dyvy = [...wm_dyvy_kp]
        let dyvy_1
        const map_code_tsn_rn=new Map()
        for(let yg of wm_ztwy){
        map_code_tsn_rn.set(yg.code||yg.pattern, yg)
        const rj_qq = (yg.code||yg.pattern).replace(/,/g,"").split('').reverse()
        map_code_tsn_rn.set(rj_qq, yg)
        }
        for(;wm_dyvy.length;){
        dyvy_1 = wm_dyvy.splice(0,1)[0]
        if(map_code_tsn_rn.has(dyvy_1)){
        continue;
        }
        if(atvn_vbyt(dyvy_1)){
        break;
        }
        }
        if(!dyvy_1){
        uzms("csrf-hmpc ah cgne n dyvy, rt vigl ba wk hidz vn-")
        }else{
        wm_ztwy.push({code:dyvy_1, yxna_yfkt: yxna_hqtz_yfkt+wrm_cqzt_di_yfm[user_params.lastParams]+udao_yfkt, name:user_params.lastParams})
        rrzv(wm_ztwy)
        return user_params.lastParams+""+dyvy_1
        }
        }else{
        uzms("csrf-yxna ac zznq-"+yxna_dyvy_bx)
        }
        }else{
        uzms("csrf-aoao tszn hidz vnaw-")
        }
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
function bmee(yxna){
fs.writeFileSync(yxna+".bak", fs.readFileSync(yxna))
}
function rrzv(wm_ztwy){
bmee(yxna_ztwy)
fs.writeFileSync(yxna_vdum, JSON.stringify(wm_ztwy, null, 2))
        
}