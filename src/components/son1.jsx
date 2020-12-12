import React from 'react'

class Son1 extends React.Component {
    state = {
        value: ''
    }

    handleChange = (e)=>{
        let value = e.target.value
        this.setState({value})
    }

    handleClick = ()=>{
        if(this.props.getSon1){
            this.props.getSon1(this,this.state.value)
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='用户名' value={this.state.value} onChange={this.handleChange}/>
                    <button type='button' onClick={this.handleClick}>传值</button>
                </form>
            </div>
        )
    }
}
export default Son1