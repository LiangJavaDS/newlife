import React from 'react';
class userList extends React.Component {
    constructor() {
        super()
        this.state = {
            pwd:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        let name = this.nameInput.value
        let pwd = this.state.pwd
        console.log('7878',name,pwd)
        alert ("用户名为"+name+"密码为"+pwd)
        event.preventDefault()
    }

    handleChange(event){
        let pwd = event.target.value
        this.setState({pwd})
    }

    render() {
        return (
            <div>
                <form action='/test' onSubmit={this.handleSubmit}>
                    {/* 非受控组件，需要手动读取表单输入框的数据 */}
                    用户名：<input type='text' ref={input => this.nameInput = input}/>
                    {/* 受控组件，自己去读取密码框的数据 */}
                    密码：<input type='password' value={this.state.pwd} onChange={this.handleChange}/>
                    <input type='submit' value='登录'/>
                </form>
            </div >
        )
    }
}

export default userList