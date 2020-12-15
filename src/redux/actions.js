//包含所有的action creator
import { INCREMENT, DECREMENT } from '@/redux/action-types.js'
//生产action的函数
export const increment = (num) => ({type:INCREMENT,data:num})
export const decrement = (num) => ({type:DECREMENT,data:num})