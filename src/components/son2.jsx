import React from 'react'
import PubSub from 'pubsub-js'

class Son2 extends React.Component {
    state={
        son1State:''
    }

    //方法1，通过子传父，父传子完成兄弟之间的数据传递
    //当组件接收到新的属性时回调，将数据请求放在这里处理。
    //获取新的props，从而更新子组件的state
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props.son1State != nextProps.son1State){
            let son1State = nextProps.son1State
            this.setState({son1State})
        }
    }


    render() {
        return (
            <div>
                {this.state.son1State}
            </div>
        )
    }
}
export default Son2