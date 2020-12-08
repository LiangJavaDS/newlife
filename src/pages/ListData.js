import react from 'react';

class ListData extends react.Component{
    constructor(props){
        super(props);
        this.state={
            listData:[1,2,3,4],
            maxNum:4
        }
    }
    render(){
        return(
            <div>
                <ul>{this.state.listData.map((index,value)=>{
                    return <li key={index}>{value}</li>
                })}</ul>
                <button onClick={()=>{
                    let maxNum = this.state.maxNum+1;
                    let listData = [...this.state.listData,maxNum];
                    this.setState({
                        listData,
                        maxNum
                    })
                }
                }>添加</button>
            </div>
        )
    }
}

export default ListData;