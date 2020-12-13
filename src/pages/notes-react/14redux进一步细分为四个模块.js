import React from 'react'
import store from '@/redux/store.js'
import App from '@/components/redux/app.jsx'

class Father extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value:null
        }
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