const wytm = require('../cmd-zhqh-atvn/wytm.js')
module.exports = [["wytm"], {
    describe: `
wytm ybkc, jcbz rrzv wytm ybkc yh, zf fj aqfc rr bqeo om qh.
example:
wytm
bqeo

wytm see

wytm see
2/2/2024, 5:37:17 AM

wytm see --yxna
2/2/2024, 5:37:17 AM

wytm undo

wytm qkyp
qkyp bqeo

wytm date 2008-1-1,2:0:6
bqeo

kn tzrn fr dk wydb gtaw dk afoa pcyc:
wytm --tzrn
\${require(yxna)}
`
    , func: wytm
}]