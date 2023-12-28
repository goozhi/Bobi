const fs = require('fs')
const path = require('path')
async function fdbj_rjqt(ctx, next) {
    if (ctx.path === '/fdbj-rjqt') {
        const diwr_yhld = ctx.url.match(/\?name=(.*)/)
        const nikc_fdbj_rjqt = '/storage/emulated/0/wrvr/fdbj-rjqt/'
        if (diwr_yhld) {
            if (fs.existsSync(path.join(nikc_fdbj_rjqt, diwr_yhld[1]))) {
                ctx.attachment(path.join(nikc_fdbj_rjqt, diwr_yhld[1]))
                await send(ctx, diwr_yhld[1], { root: nikc_fdbj_rjqt })
            } else {
                ctx.body = 'bi afoa aqfc jyqh nq ssvl mb.'
            }
        } else {
            ctx.body = 'zf aqfc yp mb "?name=rjqt-wu" cl qh.'
        }
    } else {
        await next()
    }
}
module.exports = fdbj_rjqt