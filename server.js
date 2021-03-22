let Koa = require('koa');
let router = require('./router/index.js')

// 1.实例化
let app = new Koa();


// 4.使用中间件
app
	.use(router.routes())  //使用路由
	.use(router.allowedMethods()) //使用注册路由方法

// 2.监听端口
app.listen('3011', (err)=>{
	if(err) return;
	console.log('服务器启动成功')
	console.log('服务器地址: http://localhost:3011')
})
