import React from "react";//创建组件、生命周期、虚拟DOM元素
import ReactDom from "react-dom"//把创建好的组件和虚拟DOM放到页面上展示的

function Person(name, age) {
    this.name = name
    this.age = age
}

//实例方法,挂载在原型对象上
Person.prototype.say = function(){
    // console.log('这是Person的实例方法')
}

//静态方法,静态的都挂载给了构造函数
Person.show = function(){
    // console.log('这是Person的静态方法')
}

const p1 = new Person('tom',15)
Person.info = '666'
//实例方法
p1.say()//挂载在原型对象上
//静态方法
Person.show()//挂在在构造函数上
// console.log('2323',p1)
//通过new出来的实例，访问到的属性，叫做【实例属性】
// console.log(p1.name)
//通过构造函数，直接访问到的属性，叫做【静态属性】
// console.log(Person.info)

//1.class的{}内部只能写构造器,静态方法,静态属性,实例方法.(实例属性在构造器中写)
class Animal {
    //这是类中的构造器，每一个类中都有一个构造器，要么隐形默认，要么我们自己定义覆盖默认的
    //构造器的作用，每当new这个类的时候，必然优先执行构造器中的代码
    constructor(type,color){
        this.type = type
        this.color = color
    }
    //在class内部，通过static修饰的属性，就是静态属性,只能通过类名.出来
    static info = 'eee'

    jiao(){
        // console.log('动物的实例方法')
    }

    static eat(){
        // console.log('动物的静态方法')
    }
}
const A1 = new Animal('dog','black')
//info是Animal的静态属性
// console.log('7878',A1.info)

// console.log(A1)
// console.log(A1.jiao)
class bilibili extends React.Component {

    render() {
        return (
            <div>
                123
            </div>
        )
    }
}
export default bilibili