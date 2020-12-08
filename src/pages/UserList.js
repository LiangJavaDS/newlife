import React from 'react';
import { Table, Tag, Space } from 'antd'

const Column = Table.Column
const data = [
    {
        key: '1',
        name: '张三',
        age: 32,
        address: '青岛市黄岛区',
        tags: ['很棒！', '发明家'],
    },
    {
        key: '2',
        name: '李四',
        age: 42,
        address: '游手好闲，逃避现实',
        tags: ['失败者'],
    },
    {
        key: '3',
        name: '王五',
        age: 32,
        address: '上海市浦东新区',
        tags: ['酷拽', '老师'],
    },
];
class userList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: data,
            a:'',
            pwd:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleChange = this.handleChange.bind(this)
    }

    delete = (text,record) => { 
        let newList = [...this.state.data]
        let index = parseInt(record.key-1)
        newList.splice(index,1)
        this.setState({data:newList})
    }

    handleSubmit(event){
        let name = this.nameInput.value
        let pwd = this.state.pwd
        // console.log('7878',this.refs.name.value)
        // alert ("用户名为"+name+"密码为"+pwd)d
        alert (this.refs.name.value)
        event.preventDefault()
    }

    handleBlur = (event)=>{
        let pwd = event.target.value
        this.setState({pwd})
        alert(pwd)
    }

    render() {
        return (
            <div>
                <form action='/test' onSubmit={this.handleSubmit}>
                    用户名：<input type='text' ref='name'/>
                    密码：<input type='password' placeholder='失去焦点时弹框' onBlur={this.handleBlur}/>
                    <input type='submit' value='登录'/>
                </form>
                <Table dataSource={this.state.data}>
                    <Column
                        title='姓名'
                        dataIndex='name'
                        key='name'
                        render={text => <a>{text}</a>}
                    />
                    <Column
                        title='年龄'
                        dataIndex='age'
                        key='age'
                    />
                    <Column
                        title='住址'
                        dataIndex='address'
                        key='address'
                    />
                    <Column
                        title='标签'
                        dataIndex='tags'
                        key='tags'
                    />
                    <Column
                        title='操作'
                        key='action'
                        render={(text, record) => (
                            <Space size="small">
                                <a onClick={() =>  this.delete(text,record) }>删除</a>
                            </Space>
                        )}
                    />
                </Table>
            </div >
        )
    }
}

export default userList