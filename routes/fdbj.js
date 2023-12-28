async function fdbj(ctx, next) {
    if (ctx.path === 'fdbj') {

    } else {
        await next()
    }

}
module.exports = fdbj