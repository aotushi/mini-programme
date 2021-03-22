import request from '../../utils/request.js';

const state={
	initData:'vuex测试数据',
	indexData:{},    //首页数据
	indexData2: {},   //首页数据
	indexData3:{}    //首页数据
}

const mutations ={
	changeIndexDataMutation(state, result){
		state.indexData = result;
	},
	changeIndexData2Mutation(state, result){
		state.indexData2 = result;
	},
	changeIndexData3Mutation(state, result){
		state.indexData3 = result;
	},
}

const actions = {
	async getIndexDataAction({commit}){
		let result = await request('/getIndexData');
		commit('changeIndexDataMutation', result.data)
	},
	async getIndexData2Action({commit}){
		let result = await request('/getIndexData2');
		commit('changeIndexData2Mutation', result.data)
	},
	async getIndexData3Action({commit}){
		let result = await request('/getIndexData3');
		commit('changeIndexData3Mutation', result.data)
	},
}

const getters = {
	
}

export default {
	state,
	mutations,
	actions,
	getters
}