import { INCREMENT, DECREMEMT, ADD_PERSON_OBJ } from './action_type'

export function counter(preState = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return preState + action.data
        case DECREMEMT:
            return preState - action.data
        default:
            return preState
    }
}

const initPersons = [{ id: '123', name: 'lhy', age: '18' }]
export const addPerson = (prePersons = initPersons, action) => {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON_OBJ:
            return [data, ...prePersons]
        default:
            return prePersons
    }
} 