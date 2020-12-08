import { defineConfig } from 'umi';//umi框架，优先来这里读取路由.configure.js

export default{
    plugins:
        ['umi-plugin-react',{
              dva: true, // 开启dva功能             
            antd: true // 开启Ant Design功能
        }]  
}
export default defineConfig(
    {   
        nodeModulesTransform: {
            type: 'none',
        },
        routes: [
            {
                path: '/',
                component: '../layouts',
                routes: [
                    {
                        path: 'bilibili',
                        component: './bilibili'//@指src目录
                    },
                    
                    {
                        path: 'mytabs',
                        component: './MyTabs'//@指src目录
                    },

                    {
                        path: 'ModelListData',
                        component: './ModelListData'
                    },

                    {
                        path: 'list',
                        component: './UserList'
                    },
                    {
                        path: 'add',
                        component: './UserAdd'
                    },
                    {
                        path: 'userList',
                        component: './UserList'
                    },
                ]
            }
        ],
    });
