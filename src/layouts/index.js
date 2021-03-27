import { Layout, Menu } from 'antd'//再umi约定的目录结构中，layouts/index.js文件会被认为作为全局的布局文件
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    UserOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';
import React from 'react'//解构表达式
const { Header, Sider, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;
class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline" theme="dark"
                    >
                        <SubMenu key="sub1"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>用户管理</span>
                                </span>
                            }>
                            <Menu.Item key="1">
                                <Link to="/userList">用户列表</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/userAdd">新增用户</Link>
                            </Menu.Item>
                            <Menu.Item key="3" >
                                <Link to="/bilibili">redux第一遍</Link>
                            </Menu.Item>
                            <Menu.Item key="4" >
                                <Link to="/users">umi哒哒</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>后台系统 ©2020  Created by 梁凉凉</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;