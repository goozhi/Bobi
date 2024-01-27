const fs = require('fs')
const path = require('path')
const axios = require('axios')
const nikc_out = path.resolve('out')
const nikc_xyzd_html = path.join(nikc_out, 'test.html')

const getit = async (user_params = {}, outputs = { outputText }, neig_kp = {}) => {
    const neig = Object.assign({ neig_kp }, neig_kp)
    outputs.outputText = await (async () => {
        return await axios.post('http://localhost:9090/api/get-html', {
            url: user_params.lastParams
        }).then(res => {
            fs.writeFileSync(nikc_xyzd_html, res.data || 'oops, data not found.')
            return `write in \nfile://${nikc_xyzd_html}\n${res.data}`
        }).catch(err => { throw (err) })
    })().catch(err => { throw err })
}
module.exports = getit