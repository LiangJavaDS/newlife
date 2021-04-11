import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 1 对象式的setState
        const { count } = this.state
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count)
        })

        // 2 函数式的setState
        // this.setState((state, props) => {
        //     console.log(state, props)
        //     return { count: state.count + 1 }
        // })
    }
    render() {
        return (
            <div>
                <h1>count的值为：{this.state.count}</h1>
                <button onClick={this.add}>加1</button>
            </div>
        )
    }
}
