const eysj_zjqt = require('../scripst/eysj_zjqt')

async function eysj(ctx, next) {
    if (/\/eysj-zjqt\//.test(ctx.path)) {
        const eysj = ctx.path.replace(/.*\//, "")
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.body = await eysj_zjqt({ rjyf: /\/rjyf\//.test(ctx.path), eysj }).catch(err => ctx.body = err.stack || err)
    } else {
        await next()
    }
}
module.exports = eysj