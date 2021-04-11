import React, { Component } from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Son from '@/pages/secondRedux/son.js'
import Person from '@/pages/secondRedux/persons.js'
class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
        // store.subscribe(() => {
        //     this.setState({ value: store.getState() })
        // })
    }

    render() {
        return (
            <Provider store={store} >
                <Son />
                <Person />
            </Provider>
        )
    }
}
export default Father