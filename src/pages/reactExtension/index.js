import React, { Component } from 'react'
// import Demo from './components/01.setState'
// import Demo from './components/02.hooks/useState'
import Demo from './components/02.hooks/useEffects'
export default class App extends Component {
    render() {
        return (
            <div>
                <Demo x={101} />
            </div>
        )
    }
}
