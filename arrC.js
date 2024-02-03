const fs = require('fs')
const path = require('path')
const rsgm_gzbu = require('./cmd-zhqh-atvn/rsgm-gzbu')
const jhyw = require('./cmd-zhqh-atvn/jhyw')
const getBlackList = require('./cmd-zhqh-atvn/getBlackList')
const jhjh = require('./cmd-zhqh-atvn/jhjh')
const light = require('./cmd-zhqh-atvn/light')
const audio = require('./cmd-zhqh-atvn/audio')
const tk = require('./cmd-zhqh-atvn/tk')
const wvmr = require('./cmd-zhqh-atvn/wvmr')
const lzdr_arrC = require('./cmd-zhqh-atvn/lzdr-arrC.js')
const uis = require('./cmd-zhqh-atvn/uis.js')
const zk_aucc = require('./cmd-zhqh-atvn/zk_aucc.js')
const qwse = require('./cmd-zhqh-atvn/qwse.js')
const wytm = require('./cmd-zhqh-atvn/wytm.js')
const getit = require('./cmd-zhqh-atvn/getit.js')
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
}], [['getit'], {
    describe: `get the html of given url, then write it in default path.
    example:
    getit
    url
    
    hsoy test.html ab hsoy tum
    getit hsoy
    
    caum hsoy dk html.
    getit ls
    
    zjhq hsoy caju yh dk html
    getit see
    html-source`,
    func: getit
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
    
    jhjh off
    
    uwuu ae gnwn gbow yf:
    Jhjh yf
    `,
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
}], [['tk'], {
    describe: `open the ssn fi bsm.
    example:
    tk`,
    func: tk,
    aoao_ji_ssvl: true
}], [['wvmr'], {
    describe: `nwvt bnll ssvl wvmr
    example:
    wvmr`,
    func: wvmr,
    aoao_ji_ssvl: true
}], [['lzdr'], {
    describe: `lzdr arrC in Bobi.
    example:
    lzdr`,
    func: lzdr_arrC
}], [['jhyw'], {
    describe: `jhyw
    example:
    jhyw`,
    func: jhyw
}], [['uis'], {
    describe: `uwuu ouss dk uis, nwvt ahdb ui.
    example:
    uis`,
    func: uis,
    aoao_ji_ssvl: true

}], [['zk_aucc'], {
    describe: `
        uwuu zk aucc ae gnwn zk aucc.
        example:
        zk_aucc

        zk_zucc off
    `
    , func: zk_aucc,
    aoao_ji_ssvl: true
}], [["qwse"], {
    describe: "nwvt eonq jyqh dk qwse\nexample:\nqwse\nifyj zf co taxt i_d lh 45 dk qwse:\nqwse 45",
    func: qwse,
    aoao_ji_ssvl: true
}], [["wytm"], {
    describe: `
wytm ybkc, jcbz rrzv wytm ybkc yh, zf fj aqfc rr bqeo om qh.
example:
wytm
bqeo

wytm see

wytm see
2/2/2024, 5:37:17 AM

wytm undo

wytm qkyp
qkyp bqeo

wytm date 2008-1-1,2:0:6
bqeo
`
    , func: wytm
}]
]
module.exports = arrC