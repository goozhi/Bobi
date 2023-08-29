const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const commd = require('./scripst/commd');
const app = new Koa();
const fictions = require('./my-fictions/main')
const dirName = path.join(__dirname, 'assets');
const koaStatic = require('koa-static')
const yxna_caju = ['wjdk-vktm', 'afoa', 'yxna-caju', 'hsoy-esqt']
const neig = require('./neig')
const uzms = require('./afoa/uz_ms')
const send = require('koa-send')
var vnwm_1
var yxna_esqt
// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
// body parser
app.use(bodyParser());

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response
// index page
const obj_ybkc = {}
const href_fictions = [...fictions].map(([key, value]) => {
    const path_fiction = key.bookName.split('').map(ele => ele.charCodeAt(0)).join('-')
    obj_ybkc[path_fiction] = key
    return `<a href="/${path_fiction}" target="_blank" class="button--grey">${key.bookName}</a>`
})

app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        const html = fs.readFileSync(`${dirName}/index.html`).toString().replace(/.*\/gusi.*/, href_fictions.join('\n'));
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});

// about page
app.use(async (ctx, next) => {
    if (ctx.path === '/afoa') {
        if (ctx.method === 'GET') {
            const html = `
        <html>
          <body>
            <h1>About Page</h1>
            <form method="POST">
            <label for="input">input:</label>
            <textarea style="width:100%;" name="message" id="message" required></textarea>
            <br>
            <input type="submit" value="Submit">
            </form>
          </body>
        </html>
      `;
            ctx.body = html;
        } else if (ctx.method === 'POST') {
            const message = ctx.request.body.message;
            if (!message) {
                throw new Error(`error`)
            }
            await commd(message).then(result => {
                outputText = result.outputText
                const html = `
        <html>
        <body>
          <h1>About Page</h1>
          <form method="POST">
          <label for="input">input:</label>
          <textarea style="width:100%;" rows=8 name="message" id="message" required>${message}</textarea>
          <br>
          <input type="submit"  style="width:100%;" value="Submit">
          </form>
          <label for="output">output:</label>
          <textarea style="width:100%;" rows=16 name="output" id="output" required>${outputText}</textarea>
          <br>
          <button onclick="copy()"  style="width:100%;">Copy</button>
          <script>
          function copy() {
            const output = document.getElementById("output");
            navigator.clipboard.writeText(output.value).then(() => {
              console.log('text copied to clipboard');
            });
          }
          </script>
        </body>
      </html>

    `;
                ctx.body = html;
            }).catch(err => ctx.body = err.stack || err)
        }

    } else if (ctx.path === '/about') {
        const html = fs.readFileSync(`${dirName}/about.html`);
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
        ctx.body = html;
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    const gkjq_yj_ab = Object.entries(obj_ybkc).some(([key, value]) => {
        if ('/' + key === ctx.path) {
            const html = fs.readFileSync(`${dirName}/fiction.html`).toString().replace(/fiction-content/, [...fictions.get(value)].map(([key, value], index_1) => `第${index_1 + 1}章<h2>${value.title}</h2>` + value.content).join('\n\n')).replace(/\n/g, '<br>').replace(/fiction-title/, value.bookName);
            ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
            ctx.body = html;
            return true
        }
    })
    if (gkjq_yj_ab) {

    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/wjdk-vktm' === ctx.path) {
        const html = fs.readFileSync(`${dirName}/info-of-lee.html`)
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/yxna-caju' === ctx.path) {
        const html = yxna_caju.toString()
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = html
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if ('/hsoy-esqt' === ctx.path) {
        const yxna_hsoy_esqt = '/storage/emulated/0/\u7a00\u6709\u8f6f\u4ef6/'
        if (!fs.existsSync(yxna_hsoy_esqt)) {
            try {
                uzms('csrf-yxna ac zznq-' + yxna_hsoy_esqt)
            } catch (err) {
                ctx.body = err.toString()
                return
            }
        }
        const vnwm_2 = fs.readdirSync(yxna_hsoy_esqt, { recursive: true })
        ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
        ctx.body = `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hsoy-esqt</title>
</head>

<body>
    <form action="/dqab-esqt" method="post">
        <textarea name="esqt_wu" id="" cols="30" rows="10">${vnwm_2.join('\n')}</textarea>
        <button>zhms</button>
    </form>
</body>

</html>`
    } else {
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.path === '/dqab-esqt') {
        const yxna_hsoy_esqt = '/storage/emulated/0/\u7a00\u6709\u8f6f\u4ef6/'
        if (ctx.method === 'POST') {
            if (!fs.existsSync(yxna_hsoy_esqt)) {
                try {
                    uzms('csrf-yxna ac zznq-' + yxna_hsoy_esqt)
                } catch (err) {
                    ctx.body = err.toString()
                    return
                }
            }
            const vnwm_2 = fs.readdirSync(yxna_hsoy_esqt, { recursive: true })
            vnwm_1 = vnwm_2.filter(rn1 => rn1.includes(ctx.request.body.esqt_wu))
            if (vnwm_1.length) {
                if (vnwm_1.length > 1) {
                    ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
                    ctx.body = 'rt lzca vdzv esqt_wu: ' + vnwm_1.join(' ae ')
                } else {
                    yxna_esqt = path.join(yxna_hsoy_esqt, vnwm_1[0])
                    ctx.attachment(yxna_esqt)
                    await send(ctx, vnwm_1[0], { root: yxna_hsoy_esqt })
                }
            } else {
                ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8')
                ctx.body = 'hmpc diyc dk esqt.'
            }
        } else {
            ctx.attachment(yxna_esqt)
            await send(ctx, vnwm_1[0], { root: yxna_hsoy_esqt })
        }
    } else {
        await next()
    }
})
app.listen(neig.izlp, () => {
    console.log(`app listening at http://localhost:${neig.izlp}`)
});
