async function rx_wuey_wlyc(ctx, next) {

    if (/Android [0-9]\b|iPhone OS (?:[0-9][^\d]|1[0-1][^\d])|^(?:(?!Windows|Mac|iPhone|Android|[Uu]buntu).)+$/.test(ctx.header['user-agent']) && !/vivobrowser/i.test(ctx.header['user-agent'])) {
        if (fs.existsSync(yxna_wrvr))
            fs.appendFile(path.join(yxna_wrvr, 'blackNameList.txt'), `${new Date().toString()} ${ctx.URL} ${ctx.header['user-agent']}\n`, (err) => { })
        const html = fs.readFileSync(`${dirName}/index.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
        return
    }
    if (ctx.path === '/rx-wuey-wlyc') {
        const html = fs.readFileSync(`${dirName}/index.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
}
module.exports = rx_wuey_wlyc