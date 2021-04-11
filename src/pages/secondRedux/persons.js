import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '@/pages/secondRedux/redux/action.js'

class Persons extends Component {

    addPerson = () => {
        const userName = this.userName.value
        const age = this.age.value
        console.log('7878', userName, age)
        this.props.addPerson({ id: nanoid(), name: userName, age })
    }

    render() {
        const { count, persons } = this.props
        console.log('7878props', this.props)
        return (
            <div style={{ width: '500px', height: '150px', textAlign: 'center', border: '1px solid black' }}>
                <h1>求和为{count}</h1>
                <span>名字</span> <input ref={c => this.userName = c} />&nbsp;
                <span>年龄</span> <input ref={c => this.age = c} /><br /><br />
                <button onClick={this.addPerson}>添加person</button>&nbsp;
                <ul>
                    {persons.map(person => (
                        <li>{person.name}:{person.age}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({ count: state.counter, persons: state.addPerson }),
    { addPerson }
)(Persons)