import React from "react";//创建组件、生命周期、虚拟DOM元素
// import React,{Component} from 'react'//另外一种写法
import ReactDom from "react-dom"//把创建好的组件和虚拟DOM放到页面上展示的
import '@/pages/notes-react/03-calss继承'
import Movie  from '@/pages/notes-react/04Movie组件.js'


//class组件有自己的私有数据和生命周期函数,有状态组件
//使用function创建的组件,只有props,没有自己的私有数据和生命周期函数,无状态组件
const user = {
    name:'梁凉凉',
    age:18,
    gender:'男'
}

class B extends React.Component {
    //render是class的一个实例方法,因为前面没有rerurn
    render() {
        return (
            <div>
               <Movie {...user}></Movie>
            </div>
        )
    }
}

export default B    