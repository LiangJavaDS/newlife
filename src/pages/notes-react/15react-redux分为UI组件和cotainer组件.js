import React from 'react'
import store from '@/redux/store.js'
//发现对应文件没有定义组件名，故此组件名可以定义为任意，主要是路径名。
import App from '@/containers/react-redux/app.jsx'
import { Provider } from 'react-redux'

class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
        store.subscribe(() => {
            this.setState({ value: store.getState() })
        })
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <App/>
                </div>
            </Provider>
        )
    }

}
export default Father