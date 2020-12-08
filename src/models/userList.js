import request from '../util/request'
export default{
    namespace:'userList',
    state:{
        UserData:[],
        User:{},
        UserNo:''
    },
    reducers:{
        init(state,action){
            let data = action.data;
            return{
                ...state,
                ...data
            };
        },
        delete(state,action){
            let UserData = state.UserData;
            let newList = [...UserData];
            //arrayObject.splice(添加/删除的位置，删除的项目数量（为0时不删除），添加的项目1，添加的项目2,....)会改变原数组!!!
            newList.splice(newList.findIndex(item=>item.key==action.key),1);
            return{
                ...state,
                UserData:newList
            }
        }
    },
    effects:{
        *initData(action,{call,put,select}){
            const url = '/user/list';
            let data = yield call(request,url);//用于调用异步逻辑
            yield select(//从state中获取数据
                state=>{
                    return state['userList'].UserData
                }
            )
            yield put(//触发action
                {
                    type:'userList/init',
                    data:data,
                }
            );
        }       
    }
}