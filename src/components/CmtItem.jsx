import React from 'react'

// 第三种Style的封装
// import Styles from '@/components/styles.js'

// 第四种css引入，module模块化，css作用域
import cssobj from '@/layouts/cmtitem.css'
// console.log(cssobj)

//第一种Style的封装
// const  ItemStyle = {border:'1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'}
// const  userStyle = {fontSize:'14px'}
// const contentStyle = {contentStyle:'12px'}

//第二种Style的封装
// const Styles = {
//     item:{border:'1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'},
//     user:{fontSize:'14px'},
//     content:{contentStyle:'12px'}
// }

function Comment(props) {

// 第三种Style的封装
//     return <div style={Styles.item}>
//     <h1 className={cssobj.title} style={Styles.user}>评论人:{props.user}</h1> 
//     <p style={Styles.content}>评论内容:{props.content}</p>
//    </div>

// 第四种css引入，module模块化，css作用域
    return <div className={cssobj.item}>
    <h1 className={cssobj.user}>评论人:{props.user}</h1> 
    <p id={cssobj.content}>评论内容:{props.content}</p>
    </div>
}

export default Comment