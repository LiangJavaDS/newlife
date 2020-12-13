import React from 'react'
import Son1 from '@/components/PubSub/son1.jsx'
import Son2 from '@/components/PubSub/son2.jsx'
import Son3 from '@/components/PubSub/Son3.jsx'

class Father extends React.Component {

    render() {
        return (
            <div>
                <Son1/>
                <Son2/>
                <Son3/>
            </div>
        )
    }
}
export default Father