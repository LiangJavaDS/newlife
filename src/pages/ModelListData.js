import React from 'react'
import {connect} from 'dva'

const namespace = 'listDataModel'

const mapStateToProps = (state)=>{
	
	let data = state[namespace].listData;
	let maxNum = state[namespace].maxNum;

	return {listData:data,maxNum:maxNum}
	
}

const mappDisptchToProps= (dispatch)=>{// 定义方法，dispatch是内置函数
	return{//返回的这个对象将绑定到this.props对象中
		add(){// 定义方法
			dispatch({type:namespace+'/add'})	// 通过调用dispatch()方法，调用model中reducers的方法
		},
		init(){
			dispatch({type:namespace+'/initData'})
		}
	}
}

@connect(mapStateToProps,mappDisptchToProps)
class ListData extends React.Component{
	componentDidMount(){
		this.props.init();
	}
	render(){
		return(
			//jsx
			<div>
				<ul>
					
					{this.props.listData.map((value,index)=>{
						return <li key={index}>{value}</li>
					})}
				</ul>
				<button onClick={this.props.add} >添加</button>

			</div>
		)

	}
}

export default ListData;