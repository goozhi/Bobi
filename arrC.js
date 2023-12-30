const fs = require('fs')
const path = require('path')
const ngnc_nikc_paaw = require('../scripts/ngnc_nikc_paaw')
const rsgm_gzbu = require('./cmd-zhqh-atvn/rsgm-gzbu')
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
}], [['rsgm'], {
    describe: `make the rsgm's file same with the other device.
    example:
    rsgm --url 192.168.43.32:9000/rsgm
    D:/rsgm/file.txt
    // if the path of other device's file includes 'rsgm',
    // than the target file in rsgm  will be override with the parameter.

    // If the path is new, you should type the param "new"
    rsgm --url 192.168.43.32:9000/rsgm --figd --new
    D:/rsgm/file-new.txt
    `,
    func:rsgm_gzbu
}]
]
module.exports = arrC