async function zk_aucc(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = (() => {
        if(/^\d+$/.test(user_params._[1])){
        const vn_i_d = user_params._[1]
        const jtyj=Object.values(neig.engines.getRunningEngines()).find(rn1=>new RegExp("^"+vn_i_d+"$").test(rn1.id))
        if(jtyj){
        jtyj.forceStop()
                return "cd taxt."
        }else{
               return "ra yj ab " +vn_i_d
        }

    }else{
    return Object.values(neig.engines.getRunningEngines()).map(rn1 => {
return rn1.source+":"+rn1.id
}).join("\n")
    }
    })()
}
module.exports = zk_aucc