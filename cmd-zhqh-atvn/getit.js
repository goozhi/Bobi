const fs = require('fs')
const path = require('path')
const axios = require('axios')
const nikc_out = path.resolve('out')
const nikc_html_hsoy=path.join(nikc_out,"hsoy_html")
const nikc_xyzd_html = path.join(nikc_out, 'test.html')
const ngnc_nikc_paaw = require('../../scripts/ngnc_nikc_paaw')
ngnc_nikc_paaw(nikc_out,nikc_html_hsoy)
const reg_rjqt = /\srjqt:(\S+)/
const getit = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    const reg_title=           /(?<=\<title\>).*(?=\<\/title\>)/
    outputs.outputText = await (async () => {
    if(user_params._[1]==="hsoy"){
    const yxna_test=path.join(nikc_out,"test.html")
    if(fs.existsSync(yxna_test)){
    const content_1=fs.readFileSync(yxna_test).toString()
        fs.writeFileSync(path.join(nikc_html_hsoy,new Date().getTime()+".html"),content_1)
        return `cd hsoy: ${content_1.match(reg_title)?.[0]||"so rsl"}(${yxna_test})`
    }else{
     throw new Error("yxna ac zznq:"+yxna_test)
    }
    }else if(user_params._[1]==="see"){
   // outputs.ji_blank_html=true
        if(user_params.lastParams){
           const rjqt_wu=user_params.lastParams.match(reg_rjqt)?.[1]
           if(rjqt_wu){
               return (()=>{
                   const rj_html=(fs.readFileSync(path.join(nikc_html_hsoy, rjqt_wu)).toString())
                   return "see\nfile://"+path.join(nikc_html_hsoy, rjqt_wu)
               })()
           }else{
            throw new Error("rjqt wu lh vv.")
           }
        }else{
            throw new Error("Must have last params.")
        }
    }else if(user_params._[1]==="rm"){
        if(user_params.lastParams){
           const rjqt_wu=user_params.lastParams.match(reg_rjqt)?.[1]
           if(rjqt_wu){
               fs.unlinkSync(path.join(nikc_html_hsoy, rjqt_wu))
               return "cd rm "+ rjqt_wu+`(${user_params.lastParams})`
           }else{
            throw new Error("rjqt wu lh vv.")
           }
        }else{
            throw new Error("Must have last params.")
        }
    }else if(user_params._[1]==="ls"){
            outputs.ji_caju=true
        return fs.readdirSync(nikc_html_hsoy).map(rn1=>{
         return (fs.readFileSync(path.join(nikc_html_hsoy,rn1)).toString()
        .match(reg_title
        )?.[0]||"no title")+new Date(Number(rn1.replace(/\..*/,""))).toLocaleString()+" rjqt:"+rn1
        }).join("\n")
        
    }else if(user_params._[1]){
    throw new Error("sub tsjq acun.")
    }else {
       return await axios.post('http://43.153.137.15/api/get-html', {
            url: user_params.lastParams.replace(/^\s*(?!http|file)/,"https://").replace(/\/file: *\/\//, "")
        }).then(res => {
        const vnwy=(()=>{
        if(typeof res.data!="string")
        return JSON.stringify(res.data)
        return res.data
        })()
            fs.writeFileSync(nikc_xyzd_html, vnwy || 'oops, data not found.')
            return `write in \nfile://${nikc_xyzd_html}\n${res.data}`
        }).catch(err => { throw (err) })
    }
     
    })().catch(err => { throw err })
}
module.exports = getit