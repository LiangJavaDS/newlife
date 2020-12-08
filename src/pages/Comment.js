import React from 'react'

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            data:props.data
        })
    }
    render(){
        return(
        <div>{this.state.data}</div>
        )
    }
}
export default Comment