import request from '../util/request'
export default{
	namespace:'listDataModel',
	
	state:{//存值
		listData:[],
		maxNum:0,
		minNum:0
	},

	reducers:{//同步的，只有这里可以更新state
		add(state,action){
			let listData = state.listData;
			let maxNum = state.maxNum+1;
			listData = [...listData,maxNum];
			return {
				      listData,
				      maxNum
			 }
		},

		init(state,action){
			let data =action.data;
			return{
				...state,
				...data
			}
		}
	},

	effects:{//异步的
		*initData(action,{call,put}){
			const url = '/ds/list';
			let data = yield call(request,url);
			yield put({
				type:'init',
				data:data
			});
		}
	}


}