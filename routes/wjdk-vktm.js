const fs = require('fs')
async function wjdk_vktm(ctx, next, neig = { dirName }) {
    if ('/wjdk-vktm' === ctx.path) {
        const html = fs.readFileSync(`${neig.dirName}/info-of-lee.html`)
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
}
module.exports = wjdk_vktm