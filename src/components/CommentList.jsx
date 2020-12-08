import React from 'react'
import CommentItem from '@/components/CommentItem.jsx'
import '../components/comment.css'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comments } = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className='col-md-8'>
                <h3 className='reply'>评论回复：</h3>
                <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className='list-group'>
                    map循环中，不写{}时，箭头后语句实际被视为返回值。添加{}时，必须使用return关键字显示返回内部的任何内容。
                    {
                        comments.map((comment,index) => {return <CommentItem comment={comment} key={index} index={index} deleteComment={this.props.deleteComment}/>})
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList