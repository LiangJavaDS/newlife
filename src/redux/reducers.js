import {INCREMENT,DECREMENT} from '@/redux/action-types.js'

//包含多个reducer函数的模块
//state=0,形参默认值法
export function counter(state = 0, action) {
    let a = 0
    switch (action.type) {
        case INCREMENT:
            return a = state + action.data 
        case DECREMENT:
            return a = state - action.data 
        default:
            return a = state
    }
}