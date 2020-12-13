//包含所有的action creator
import { INCREMENT, DECREMENT } from '@/redux/action-types.js'

export const increment = (num) => ({type:INCREMENT,data:num})
export const decrement = (num) => ({type:DECREMENT,data:num})