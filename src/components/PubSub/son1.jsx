import React from 'react'
import PubSub from 'pubsub-js'

class Son1 extends React.Component {
    state = {
        value: '',
        name:'son1'
    }

    handleChange = (e)=>{
        let value = e.target.value
        this.setState({value})
    }

    handleClick = ()=>{
        const inputValue = this.state.value
        if(inputValue){
            //发布消息，一对多，一个发布多个接受。
            //第一个参数是频道名称，第二个参数是要传递的信息
            PubSub.publish('str',inputValue)
        }
        PubSub.publish('name',this.state.name)
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='用户名' value={this.state.value} onChange={this.handleChange}/>
                    <button type='button' onClick={this.handleClick}>传值</button>
                </form>
            </div>
        )
    }
}
export default Son1