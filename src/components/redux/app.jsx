import React from 'react'
import * as actions from '@/redux/actions.js'

class App extends React.Component {

    handleAdd = () => {
        //1.获取点击一次要加减的值
        let num = Number(this.select.value)
        //2.调用store的方法更新状态
        this.props.store.dispatch(actions.increment(num))
    }

    handleSub = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.调用store的方法更新状态
        this.props.store.dispatch(actions.decrement(num))
    }

    handleOdd = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.获取count的值
        let count = this.props.store.getState()
        if (count % 2 == 1) {
            //3.进行运算，更新状态
            this.props.store.dispatch(actions.increment(num))
        }
    }

    handleAsync = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.设置定时器更新状态
        setTimeout(() => {
            //3.调用store的方法更新状态
            this.props.store.dispatch(actions.increment(num))
        }, 1000)}

        render() {
            const count = this.props.store.getState()
            return (
                <div>
                    <p>click {count} times</p>
                    <div>
                        <select ref={select => this.select = select}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>&nbsp;
                    <button onClick={this.handleAdd}>+</button>&nbsp;
                    <button onClick={this.handleSub}>-</button>&nbsp;
                    <button onClick={this.handleOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.handleAsync}>increment async</button>&nbsp;
                </div>
                </div>
            )
        }
    }
    export default App