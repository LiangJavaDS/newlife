import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList } from '@/pages/users/service.ts'
// export interface IndexModelState {
//     name: string;
// }

const UserModel = {
    namespace: 'users',

    //仓库初始值
    state: {
        name: '123',
    },

    reducers: {
        getList(state, { payload }) {
            // console.log('7878payload',payload)
            //返回页面数据的，一定是return
            return payload
        }
    },

    effects: {
        //generate函数，因为是异步的，所以要加*号
        *getRemote(action, { put, call }) {
            const data = yield call(getRemoteList)
            yield put({
                type: 'getList',
                payload: data 
            })
            // yield put()//调用reducer中的方法，因为是异步的所以要加yield，等一会儿
            //实际effects是没有返回值的，因为返回数据的只能是reducer
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            //第一个参数是location，location.pathname
            return history.listen(({ pathname }) => {
                if (pathname === '/users') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            });
        }
    }
};

export default UserModel;