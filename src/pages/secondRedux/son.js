import React, { Component } from 'react'
// import * as actions from '@/pages/secondRedux/redux/action.js'
import { increment, decrement, incrementAsync } from '@/pages/secondRedux/redux/action.js'
import { connect } from 'react-redux'
class Son extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const { value } = this.selected
        // this.props.store.dispatch(actions.increment(value))
        this.props.increment(value)
    }

    decrement = () => {
        const { value } = this.selected
        this.props.decrement(value)
    }

    incrementIfOdd = () => {
        const { value } = this.selected
        // const count = this.props.store.getState()
        const count = this.props.count
        if (count % 2 != 0) {
            this.props.increment(value)
        }
    }

    incrementAsync = () => {
        const { value } = this.selected
        // const count = this.props.store.getState()
        // window.setTimeout(
        //     () => this.props.increment(value),
        //     1000
        // )
        const count = this.props.count
        this.props.incrementAsync(value)
    }

    addPerson = () => {
        const userName = this.userName.value
        const age = this.age.value
        console.log('7878', userName, age)
    }

    render() {
        const { count, persons } = this.props
        return (
            <div style={{ width: '300px', height: '100px', border: '1px solid black' }}>
                <h1>求和为{count},Person组件人数为{persons.length}</h1>
                <select ref={currentNode => this.selected = currentNode}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数则加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步则加</button>
            </div>
        )
    }
}
export default connect(
    state => ({ count: state.counter, persons: state.addPerson }),
    { increment, decrement, incrementAsync }
)(Son)