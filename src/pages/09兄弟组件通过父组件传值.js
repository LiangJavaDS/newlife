import React from 'react'
import Son1 from '@/components/son1.jsx'
import Son2 from '@/components/son2.jsx'

class Father extends React.Component {
    state = {
        son1State:null
    }

    getSon1 = (component,value) => {
        let son1State = value
        this.setState({son1State})
    }

    render() {
        return (
            <div>
                <Son1 getSon1={this.getSon1}/>
                <Son2 son1State={this.state.son1State}/>
            </div>
        )
    }
}
export default Father