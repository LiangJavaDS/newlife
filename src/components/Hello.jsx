//抽离出单独的函数组件
import React from 'react'   
//函数组件必须return，不渲染可以return null
//创建即暴露
export default function Hello(props) {
    //组件中的props永远都是只读的，不能重新赋值
    // console.log(props)
    return <div>Hello {props.gender}</div> 
}
//最后暴露出去
// export default Hello