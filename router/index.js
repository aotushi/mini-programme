// 引入
const KoaRouter = require('koa-router');

// 实例化
const router = new KoaRouter();

// 注册路由

router.get('/index', (ctx)=>{
	ctx.body = 'test'
})

const indexData = require('../datas/indexData.json')
router.get('/getIndexData', (ctx)=>{
	ctx.body = indexData
})

const indexData2 = require('../datas/indexData2.json')
router.get('/getIndexData2', (ctx)=>{
	ctx.body = indexData2
})


const indexData3 = require('../datas/indexData3.json')
router.get('/getIndexData3', (ctx)=>{
	ctx.body = indexData3
})


module.exports = router;