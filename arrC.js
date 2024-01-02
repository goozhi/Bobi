const fs = require('fs')
const path = require('path')
const rsgm_gzbu = require('./cmd-zhqh-atvn/rsgm-gzbu')
const getBlackList = require('./cmd-zhqh-atvn/getBlackList')
const jhjh = require('./cmd-zhqh-atvn/jhjh')
const light = require('./cmd-zhqh-atvn/light')
const audio = require('./cmd-zhqh-atvn/audio')
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

            server getBlackList --find keyword

            server getBlackList --findOne keyword

            `,
    func: getBlackList
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
    func: rsgm_gzbu
}], [['jhjh'], {
    describe: `drbz 360 jhjh xiub, aqfc zf sggd uudr osaw.
    example:
    jhjh
    
    jnjn off`,
    func: jhjh
    , aoao_ji_ssvl: true
}], [['light'], {
    describe: ` light up the screen of the device.
    example:
    light up
    light down
    `,
    func: light
    , aoao_ji_ssvl: true
}], [['audio'], {
    describe: `dhfh fdbj nikc yh dk yfkt.
    example:
    audio
    
    audio off
    
    set the volume of media:
    audio 10`,
    func: audio,
    aoao_ji_ssvl: true
}], [['crum'], {
    describe: `reset the phone.
    example
    crum`,
    func: async (_, outputs = {}, neig) => {
        outputs.outputText = `lzdr yh...`
        setTimeout(() => {
            process.exit()
        }, 300);
    },
    aoao_ji_ssvl: true
}]
]
module.exports = arrC