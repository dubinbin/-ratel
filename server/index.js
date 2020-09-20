const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const indexRouter = require('./routers/indexRouter')

const app = new Koa()
const PORT = 9001

app.use(cors({
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(bodyParser())
// console.log(indexRouter.routes())
app.use(indexRouter.routes())

app.listen(PORT, () => {
    console.log(`Nodejs server will running in ${PORT}`)
})