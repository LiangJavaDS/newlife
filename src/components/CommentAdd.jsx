import React from 'react'
// import '@/components/comment.css'
import cssobj from '../layouts/comment.css'
import '../components/comment.css'

class CommentList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            comment:''
        }
    }

    getUserName = (e) =>{
        let username = e.target.value
        this.setState({username})
    }

    getComment = (e) =>{
        let comment = e.target.value
        this.setState({comment})
    }

    addItem = () => {
        //此时配置的state就是我们要的一个comments对象数组中的comment对象
        let comment = this.state
        //将子组件的comment传给父组件
        this.props.getChildren(comment)
        //清空state，为获取下个comment腾空间
        this.setState({
            username:'',
            comment:''
        })
        // this.props.parent.getChildren(this,this.state)
    }
    render() {
        return (
            <div className='col-md-4'>
                <form className='form-horizontal'>
                    <div className='form-group'>
                        <label>用户名：</label>
                        <input type='text' className='form-control' placeholder='用户名' value={this.state.username} onChange={this.getUserName}/>
                    </div>
                    <div className='form-group'>
                        <label>评论内容: </label>
                        <textarea className='form-control' rows="6" placeholder='评论内容' value={this.state.comment} onChange={this.getComment}></textarea>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button type='button' className='btn btn-defalt pull-right' onClick={this.addItem}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default CommentList