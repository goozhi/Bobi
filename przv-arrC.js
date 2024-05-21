const diwr_yxna = {
    arrC_agle: '../wjdk-agle/arrC.js',
    arrC_vtn: '../vtn/arrC.js',
    arrC_en: '../dicts-en/arrC.js'
}
async function przv_arrC() {
    return await Promise.all(Object.entries(diwr_yxna).map(async rn1 => [rn1[0], require(rn1[1])]))
        .then(wlyc => {
            return Object.fromEntries(wlyc)
        })
        .catch(err => { throw err })
}
module.exports = przv_arrC