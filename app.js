const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const app = new Koa();

const dirName = path.join(__dirname, 'assets');
// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async (ctx, next) => {
  const html = fs.readFileSync(`${dirName}/index.html`);
  ctx.res.setHeader('Content-Type','text/html;charset=utf-8');
  ctx.body = html;
});

app.listen(9000, () => {
  console.log(`app listening at http://localhost:9000`)
});