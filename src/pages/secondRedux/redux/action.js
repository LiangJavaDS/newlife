import { INCREMENT, DECREMEMT, ADD_PERSON_OBJ } from './action_type'
//生成action对象的一些函数
export const increment = (value) => ({ type: INCREMENT, data: value * 1 })
export const decrement = (value) => ({ type: DECREMEMT, data: value * 1 })
export const incrementAsync = (value) => {
    return dispatch => {
        setTimeout(
            () => dispatch(increment(value)),
            1000
        )
    }
}

export const addPerson = (personObj) => ({ type: ADD_PERSON_OBJ, data: personObj })