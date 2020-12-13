import React from 'react'
import Home from '@/components/view/home.jsx'
import About from '@/components/view/about.jsx'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyNavLink from '@/components/view/myNavLink.jsx'

import '@/components/view/index.css'

class App extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {/* 可以选择的链接 */}
                    <div style={{ width: 50, height: 20, border: '1px solid black' }}>
                        <MyNavLink to='/about'>about</MyNavLink>
                    </div>
                    <div>
                        <MyNavLink to='/home' >Home</MyNavLink>
                    </div>
                </div>
                <div>
                    {/* 选择一个组件呈现 */}
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/home' component={Home} />
                        {/* 默认打开的组件路由 */}
                        <Redirect to='about' />
                    </Switch>
                </div>
            </div >
        )
    }
}
export default App