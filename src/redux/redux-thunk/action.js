//包含所有的action creator
import { INCREMENT, DECREMENT } from '@/redux/action-types.js'
//同步的action都返回一个对象
//异步的action返回的是一个函数
//生产action的函数
export const increment = (num) => ({ type: INCREMENT, data: num })
export const decrement = (num) => ({ type: DECREMENT, data: num })
export const incrementAsync = (num) => {
    return dispatch => {
        //异步的代码
        setTimeout(() => {
            //1秒之后才分发一个增加的action
            dispatch(increment(num))
        },1000)
    }
}
// // 另一种写法不用return
// export const incrementAsync = (num) => (
//     dispatch => {
//         //异步的代码
//         setTimeout(() => {
//             //1秒之后才分发一个增加的action
//             dispatch(increment(num))
//         },1000)
//     }
// )