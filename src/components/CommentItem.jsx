import React from 'react'
import '../components/comment.css'
// import '../layouts/comment.css'
class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteComment = () => {
        const { comment, deleteComment, index } = this.props
        if (window.confirm('确定删除' + comment.username + '的评论吗？')) {
            deleteComment(index)
        }
    }

    render() {
        const { comment } = this.props
        return (
            <>
                <li className='list-group-item'>
                    <div className='handle'>
                        <a href='javascript:;' onClick={this.deleteComment}>删除</a>
                    </div>
                    <p className='user'><span>{comment.username}</span><span>说：</span></p>
                    <p className='centence'>{comment.comment}</p>
                </li>
            </>
        )
    }
}
export default CommentItem