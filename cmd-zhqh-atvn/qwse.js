async function zk_aucc(user_params, outputs, neig_kp = {}) {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = (() => {
return Object.values(neig.engines.getRunningEngines()).map(rn1 => {
return rn1.source
}).join("\n")
    })()
}
module.exports = zk_aucc