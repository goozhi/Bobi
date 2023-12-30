const fs = require('fs')
const path = require('path')
const { default: axios } = require('axios');
async function rsgm_gzbu(user_params = {}, outputs = {}) {
    outputs.outputText = await (async () => {
        if (user_params.url) {
            if (user_params.lastParams) {
                const vnwm_vwdp = user_params.lastParams.split(/\n/).map(async (rn1) => {
                    if (fs.existsSync(rn1)) {
                        return await axios.post(user_params.url.replace(/^(?!\s*http)/, "http://"), {
                            yxna_rjqt: rn1,
                            content: fs.readFileSync(rn1).toString()
                        }).then(res => {
                            return res.data
                        })
                            .catch(err => {
                                return { isOk: false, reason: err.response.data.reason }
                            })
                    } else {
                        return { isOk: false, reason: 'fileNotFound:' + rn1 }
                    }
                })
                return await Promise.all(vnwm_vwdp)
                    .then(res => res.map(rn1 => JSON.stringify(rn1)).join('\n'))
                    .catch(err => { throw err })
            } else {
                throw new Error(`missing param`)
            }
        } else {
            throw new Error(`desc-error: You must input the correct param.`)
        }

    })().catch(err => { throw err })
}
module.exports = rsgm_gzbu