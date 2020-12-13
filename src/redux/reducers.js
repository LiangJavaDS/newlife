import { INCREMENT, DECREMENT } from '@/redux/action-types.js'

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