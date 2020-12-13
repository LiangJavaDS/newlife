import React from 'react'
import { NavLink } from 'react-router-dom'

class MyNavLink extends React.Component {
    render() {
        //将所有props的属性赋予这个组件
        return <NavLink {...this.props} activeClassName='active' />
    }
}
export default MyNavLink