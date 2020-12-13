import React from "react";//创建组件、生命周期、虚拟DOM元素
// import React,{Component} from 'react'//另外一种写法
import ReactDom from "react-dom"//把创建好的组件和虚拟DOM放到页面上展示的


//无论是function还是class组件,他们的props都是只读的
class Movie extends React.Component {
    //Movie组件继承了React.Component组件,所以自定义的构造器中,必须调用super
    constructor() {
        super()
        //构造函数中只有使用了super关键字才能使用this
        this.state = ({
            msg: '这是Movie组件中state的数据'
        })
    }
    
    
    //render是class的一个实例方法,因为前面没有rerurn
    render() {
        return (
            <div>
                这是一个Movie组件--{this.props.name}--{this.props.age}
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
}

export default Movie    