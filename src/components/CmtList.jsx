import React from 'react'
import Comment from '@/components/CmtItem.jsx'
import cssobj from '@/layouts/cmtlist.css'
// console.log(cssobj)
class Cmtlist extends React.Component {
    constructor(){
        super()
        this.state=({
            commentList:[
                {id:1, user:'张三', content:'哈哈,沙发'},
                {id:2, user:'李四', content:'哈哈,板凳'},
                {id:3, user:'王五', content:'哈哈,躺椅'},
                {id:4, user:'赵六', content:'哈哈,楼下山炮'}]
        })
    }

    render() {
        return (
            <div>
                <h1 className={cssobj.title}>这是评论列表组件</h1>
                {this.state.commentList.map(item =>
                  <Comment {...item} key={item.id}></Comment>
                )}
            </div>
        )
    }
}

export default Cmtlist