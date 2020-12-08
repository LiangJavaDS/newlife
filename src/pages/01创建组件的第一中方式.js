import React from "react";//创建组件、生命周期、虚拟DOM元素
import ReactDom from "react-dom"//把创建好的组件和虚拟DOM放到页面上展示的


// 1.第一个参数表示创建元素的类型，字符串，表示元素的名称
// 2.第二个参数表示创建的是一个对象或者NULL 表示这个DOM元素的属性,如id title
// 3.第三个参数表示该dom元素的字节点,文本节点
// 参数n，表示其他字节点
//4.什么时候使用{},需要写js表达式的时候
//5.map和forEach的区别：map返回新数组。forEach原数组做一件事，无返回值。
const myh1 = React.createElement('h1', null, '这是一个h1文本');
ReactDom.render('myh1', document.getElementById('root'));
const arr = ['鸣人', '佐助', '小樱']
const arrH1 = []
arr.forEach(item => {
    const temp = <h2>{item}</h2>
    arrH1.push(temp)
})

const arrMap = arr.map(item => {
    return <h2>{item+'--'}</h2>
})

//函数组件必须return，不渲染可以return null
function Hello(props) {
//组件中的props永远都是只读的，不能重新赋值
console.log(props)
return <div>Hello {props.food}</div> 
 }
const dog = {
    name:'大黄',
    age:'2',
    gender:'雄',
    food:'meat'
}
//展开运算符
const cat = {
    color:'white',
    ...dog
}
class bilibili extends React.Component {

    render() {
        return (
            <div>
                {arrH1}
                {arrMap}
                <Hello {...cat}></Hello>
            </div>
        )
    }
}
export default bilibili