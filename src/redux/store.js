import {createStore,combineReducers} from 'redux'
import { counter } from '@/redux/reducers.js'
//生成一个store对象
const store = createStore(counter)//内部会第一次调用reducer函数

export default store