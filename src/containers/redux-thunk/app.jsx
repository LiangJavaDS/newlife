import React from 'react'
import { connect } from 'react-redux'//链接react组件和redux
import { increment, decrement, incrementAsync } from '@/redux/redux-thunk/action.js'

import Counter from '@/components/react-redux/redux-thunk/counter.jsx'
//容器组件
export default connect(
    //count不能乱写要和reducer的什么一致？
    //还可写为
    state => ({ count: state }),//是一个回调函数但返回的是一个对象，即mapStateToProps，将外部数据（即state对象）转换为UI组件Counter的标签属性
    { increment: increment, decrement: decrement, incrementAsync: incrementAsync }//是一个对象，前面属性名，后面属性值。作为UI组件Counter组件的属性。即mapDispatchToProps
)(Counter)
//包装UI组件Counter