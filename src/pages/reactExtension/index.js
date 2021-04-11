import React, { Component } from 'react'
import Demo from './components/01.setState'
export default class App extends Component {
    render() {
        return (
            <div>
                <Demo x={101} />
            </div>
        )
    }
}
