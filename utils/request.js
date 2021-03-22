import config from './config.js';
export default (url, data={}, method="get")=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.host+url,
			data,
			method,
			success(res){
				resolve(res)
			},
			fail(err){
				reject(err)
			}
		})
	})
}