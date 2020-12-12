import React from 'react'
import PubSub from 'pubsub-js'

class Son2 extends React.Component {
    state={
        son1State:''
    }

    componentDidMount(){
        //订阅消息
        PubSub.subscribe('str',(msg,str)=>{
            this.setState({son1State:str})
        })
    }

    render() {
        return (
            <div>
                son2的state：{this.state.son1State}
            </div>
        )
    }
}
export default Son2