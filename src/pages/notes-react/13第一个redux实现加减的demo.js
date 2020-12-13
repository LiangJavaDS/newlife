import React from 'react'
import { createStore } from 'redux'
import { counter } from '@/redux/reducers.js'
import App from '@/components/redux/app.jsx'

//生成一个store对象
const store = createStore(counter)//内部第一次调用reducer函数，得到初始state

class Father extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value:null
        }
        //为了使页面刷新不得不改变下state
        store.subscribe(()=>{
            this.setState({value:store.getState()})
        })
    }
    render() {
        return (
            <div>
                <App store={store} />
            </div>
        )
    }

}
export default Father