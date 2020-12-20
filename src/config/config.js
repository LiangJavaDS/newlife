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
        proxy: {
            '/api': {
              'target': 'http://public-api-v1.aspirantzhang.com/',
              'changeOrigin': true,
              'pathRewrite': { '^/api' : '' },
            },
          },
    });
