import React from 'react'
import CommentAdd from '../components/CommentAdd.jsx'
import CommentList from '@/components/CommentList.jsx'

class A extends React.Component {
    state = {
        comments: [
            { username: 'Tom', comment: 'React不错！' },
            { username: 'Jack', comment: 'React真简单！' },
        ]
    }

    //添加评论
    getChildren = (comment) => {
        //将state的值取出来
        let { comments } = this.state
        //数组开头添加新增的comment
        comments.unshift(comment)
        //更新状态
        this.setState({ comments })
    }

    //删除评论
    deleteComment = (index) => {
        let {comments} = this.state
        comments.splice(index,1)
        //更新状态
        this.setState({ comments })
    }

    render() {
        return (
            <div>
                <header className='site-header jumbotron'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12'>
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    {/* <CommentAdd parent={this}/> */}
                    <CommentAdd getChildren={this.getChildren} />
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
                </div>
            </div> 
        )
    }
}
export default A