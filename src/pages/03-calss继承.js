class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Chinese extends Person{
    constructor(name,age,IdNum){
        super(name,age)
        this.IdNum=IdNum
    }
}

let c1 = new Chinese('张三',18,'787887878')
// console.log(c1)

class American extends Person{
    constructor(name,age){
        super(name,age)
    }
}

let a1 = new American('Jack',15)
// console.log(a1)