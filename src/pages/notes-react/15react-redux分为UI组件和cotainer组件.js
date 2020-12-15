import React from 'react'
import store from '@/redux/store.js'
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