import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecord, deleteRecord, addRecord } from '@/pages/users/service.ts'
import { message } from 'antd';
import { SingleUserType } from '@/pages/users/data.d';
export interface UserState {
    data: SingleUserType[];//数组形式，里面包含多个SingleUserType
    meta: {
        total: number;
        per_page: number;
        page: number;
    }
}

interface UserModalType {
    namespace: 'users';
    state: UserState;
    reducers: {
        getList: Reducer<UserState>;//reducer返回的state
    };
    effects: {
        getRemote: Effect;
        edit: Effect;
        delete: Effect;
        add: Effect;
    };
    subscriptions: {
        setup: Subscription;
    };
}

const UserModel: UserModalType = {
    namespace: 'users',

    //仓库初始值
    state: {
        data: [],
        meta: {
            total: 0,
            per_page: 5,
            page: 1,
        }
    },

    reducers: {
        getList(state, { payload }) {
            //返回页面数据的，一定是return
            return payload
        }
    },

    effects: {
        //generate函数，因为是异步的，所以要加*号
        * getRemote(action, { put, call }) {
            const data = yield call(getRemoteList)
            if (data) {
                yield put({
                    type: 'getList',
                    payload: data
                })
            } else {
                message.error('获取列表失败')
            }
            // yield put()//调用reducer中的方法，因为是异步的所以要加yield，等一会儿
            //实际effects是没有返回值的，因为返回数据的只能是reducer
        },

        * edit({ payload: { id, values } }, { put, call }) {
            const data = yield call(editRecord, id, values)
            if (data) {
                message.success('修改成功')
                yield put({
                    type: 'getRemote'
                })
            } else {
                message.error('修改失败')
            }
        },

        * delete({ id }, { put, call }) {
            const data = yield call(deleteRecord, id)
            if (data) {
                message.success('删除成功')
                yield put({
                    type: 'getRemote'
                })
            } else {
                message.error('删除失败')
            }
        },

        * add({ values }, { put, call }) {
            const data = yield call(addRecord, values)
            if (data) {
                message.success('新增成功')
                yield put({
                    type: 'getRemote'
                })
            } else {
                message.error('新增失败')
            }
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