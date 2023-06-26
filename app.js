const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const commd = require('./scripst/commd');
const app = new Koa();

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
app.use(async (ctx, next) => {
  if (ctx.path === '/') {
    const html = fs.readFileSync(`${dirName}/index.html`);
    ctx.res.setHeader('Content-Type', 'text/html;charset=utf-8');
    ctx.body = html;
  } else {
    await next();
  }
});

// about page
app.use(async (ctx, next) => {
  if (ctx.path === '/about') {
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
          <button onclick="sendData()">Send Data</button>

          <script>
          function sendData() {
            const url = '${ctx.href.replace(/\?.*/,"").replace(/http\b/,"https")}';
            const message = document.getElementById('message').value;
            fetch(url, {
              method: 'POST',
              body: JSON.stringify({message}),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(response => response.json())
            .then(data => {
              alert(data)
            })
            // .catch(error => console.error(error));
          }
          </script>          
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

  } else {
    await next();
  }
});


app.listen(9000, () => {
  console.log(`app listening at http://localhost:9000`)
});
