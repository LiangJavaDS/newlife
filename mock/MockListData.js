export default{//umi中支持对请求的模拟，由于我们现在没有真正的服务可以返回数据，所以才需要模拟。
    'get /ds/list':function(req,res){
        res.json({
            listData:[1,2,3,4],
            maxNum:4
        });
    },

    'get /user/list':function(request,response){
        response.json({
            UserData:[{ 
                key: 1, 
                name: '张三',
                age: 32, 
                address: '上海市', 
                tags: ['程序员', '帅气'], 
            },
            {
                key: 2,
                name: '李四',
                age: 42, 
                address: '北京市',
                tags: ['屌丝'],
            },
            {
                key: 3, 
                name: '王五',
                age: 32, 
                address: '杭州市', 
                tags: ['高富帅', '富二代'], 
            }
        ],
            UserNo:3
        });
    }

}
