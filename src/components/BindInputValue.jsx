//数据的传输
import React from 'react'
import { Button } from 'antd'
export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 11
        }
    }

    fn = async (...arg1) => {
        //setState是异步的且有两个参数，第一个改变state的值，第二个参数是一个function可以渠道state改变后的值
        //setState后，去改变后的state有两种方法，setState的回调函数或者异步标志
        await this.setState({ num: 22 }, function () { console.log('state', this.state.num) })
        // console.log('异步', this.state.num)
    }

    //UI界面中，文本框的内容改变了，想要同步到state中去
    //1.程序员，手动监听文本款的onChange事件
    //2.在onChange事件中，拿到最新的文本框的值
    //3.调用setState({})手动把最新的值同步到state
    txtChange = (e) => {
        //onChange事件中，获取文本框里的值有两种方案，
        //方案一：通过参数事件e获取，e.target.value
        // console.log(e.target.value)
        //方案二：ref来传
        // console.log(this.refs.txt.value)
        this.setState({num:this.refs.txt.value})
    }

    render() {
        return <div>
            <hr />
            BindEvent组件
            <hr />
            {/* {当为input绑定value值以后，要么同时提供一个readOnly要么提供一个onChange处理} */}
            <input type='text' style={{ width: '100%' }} value={this.state.num} onChange={(e) => { this.txtChange(e) }} ref='txt'></input>
            <Button onClick={() => { this.fn('🐖', '🐒') }}>{this.state.num}</Button>
        </div>
    }
}