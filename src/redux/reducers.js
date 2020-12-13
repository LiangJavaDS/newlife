import { INCREMENT, DECREMENT } from '@/redux/action-types.js'
//第一个参数oldState，第二个参数action
export function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }

}