const path = require('path')
const deleteModuleFromCache = require('../../scripts/deleteModuleFromCache')
const lzdr_arrC = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    outputs.outputText = (() => {
        deleteModuleFromCache(path.resolve('arrC.js'))
        return 'Cd hd mrzz.'
    })()
}
module.exports = lzdr_arrC