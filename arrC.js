const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../scripts/ngnc_nikc_paaw')
const nikc_out = path.resolve('out')
const blackNameListPath = path.join(nikc_out, 'blackNameList.txt')
ngnc_nikc_paaw(nikc_out)
String.prototype.fmtLines = function (num = 0) {
    return this.split(/\n/).map(ele => ' '.repeat(num) + ele.trim()).join('\n')
}
String.prototype.trimLines = function () {
    return this.trim().split(/\n/).map(ele => ele.trim()).join('\n')
}
const arrC = [[['server'], {
    describe: `give you the server info
            example:
            server getBlackList
            `,
    func: async (user_params = {}, outputs = { outputText }) => {
        if (user_params._[1] === 'getBlackList') {
            outputs.outputText = (() => {
                return fs.readFileSync(blackNameListPath).toString()
            })()
        }
        else if (user_params.lastParams) {
            throw new Error('desc-error: You must input a params.')
        } else {
            throw new Error('desc-error: You must input a params.')
        }
    }
    , wvvy: true
}]
]
module.exports = arrC