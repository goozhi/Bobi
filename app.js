const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const commd = require('./scripst/commd');
const app = new Koa();
const fictions = require('./my-fictions/main')
const dirName = path.join(__dirname, 'assets');
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
    if (ctx.path === '/func') {
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
          <input type="submit" value="Submit">
          </form>
          <label for="output">output:</label>
          <textarea style="width:100%;" rows=16 name="output" id="output" required>${outputText}</textarea>
          <br>
          <button onclick="copy()">Copy</button>
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

const port = 9000
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});
