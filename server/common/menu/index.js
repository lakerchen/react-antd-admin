module.exports = function (req, res){
    res.json(200, {
        "responseCode": "000000",
        "responseMsg": "成功",
        "SESSION_ID": "732DF39233BDAE6228DA6A9C261609E2",
        "model": {
            "menuList": [
                {
                    path: '/dashboard/',
                    label: '首页',
                    icon: 'home',
                },
                {
                    label: '订单',
                    icon: 'table',
                    subMenus: [
                        {
                            path: '/dashboard/order',
                            label: '订单列表',
                            icon: 'file-text',
                        },
                        {
                            path: '/dashboard/create',
                            label: '订单录入',
                            icon: 'file-add',
                        }
                    ]
                },
                {
                    path: '/dashboard/product',
                    label: '产品列表',
                    icon: 'file-text',
                },
                {
                    path: '/dashboard/order/edit/0001',
                    label: '编辑订单',
                    icon: 'desktop',
                },
                {
                    path: '/dashboard/order/create',
                    label: '新建订单',
                    icon: 'desktop',
                },
                {
                    path: '/login',
                    label: '登录',
                    icon: 'desktop',
                },
                {
                    path: '/notfoundurl',
                    label: '404页面',
                    icon: 'desktop',
                },
                {
                    path: '/dashboard/echarts',
                    label: '测试Echarts',
                    icon: 'area-chart',
                },
                {
                    path: '/dashboard/richtext',
                    label: '测试富文本编辑',
                    icon: 'book',
                }, 
                {
                    path: '/dashboard/about',
                    label: '关于我们',
                    icon: 'desktop',
                }
            ]
        }
        
    });
}