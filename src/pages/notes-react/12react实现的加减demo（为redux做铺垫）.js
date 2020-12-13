import React from 'react'

class Father extends React.Component {
    state = {
        count: 0
    }

    handleAdd = () => {
        //1.获取点击一次要加减的值
        let num = Number(this.select.value)
        //2.获取state中count的值，并进行运算
        let count = this.state.count
        //3.更新状态
        this.setState({ count: count + num })
    }

    handleSub = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.获取state中count的值，并进行运算
        let count = this.state.count - num
        //3.更新状态
        this.setState({ count })
    }

    handleOdd = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.获取state中count的值
        let count = this.state.count
        if (count % 2 == 1) {
            //3.进行运算，更新状态
            this.setState({ count: count + num })
        }
    }

    handleAsync = () => {
        //1.获取选择加减的数量
        let num = Number(this.select.value)
        //2.获取state中count的值，并进行运算
        let count = this.state.count + num
        //3.设置定时器更新状态
        setTimeout(() => {
            this.setState({ count })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>click {this.state.count} times</p>
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
export default Father