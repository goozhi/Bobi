const fs = require('fs')
const path = require('path')
const routes_path = path.resolve('routes')
async function yxna_caju(ctx, next) {
    if ('/yxna-caju' === ctx.path) {
        const html = fs.readdirSync(routes_path).join('<br>')
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
}
module.exports = yxna_caju