import React, { Component } from 'react'

// class Demo extends Component {
//     state = {
//         count: 0
//     }
//     add = () => {
//         this.setState((state, props) => {
//             return { count: state.count + 1 }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}&nbsp;&nbsp;&nbsp;hooks</h1>
//                 <button onClick={this.add}>加1</button>
//             </div>
//         )
//     }
// }

function Demo() {
    const [count, setCount] = React.useState(0)
    function add() {
        //两种写法
        // setCount(count + 1)
        setCount(value => value + 1)
    }
    return (
        <div>
            <h1>{count}&nbsp;&nbsp;&nbsp;hooks</h1>
            <button onClick={add}>加1</button>
        </div>
    )
}

export default Demo