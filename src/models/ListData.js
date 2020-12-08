import request from '../util/request';

export default {
    namespace: 'list',
    state: {
        data: [],
        maxNum: 0
    },
    reducers: {
        addNewData(state, result) {
            if (result.data) {
                return result.data;
            }
            let maxNum = state.maxNum + 1;
            let list = [...state.data, maxNum];
            return {
                data: list,
                maxNum: maxNum
            }
        }
    },
    effect:{//effect用于异步加载数据
        *initData(params,sagaEffects){//定义异步方法
            const {call,put} = sagaEffects;//获取到call，put方法
            const url = "/ds/list";//定义请求的url
            let data = yield call(request,url);//执行请求
            yield put({//调用reducers中的方法
                type:'addNewData',//指定方法名
                data:data//传递ajax回来的数据
            })
        }
    }
}