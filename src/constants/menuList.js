const menuList = [
    {
        path: '/dashboard/order',
        label: '订单列表',
        icon: 'desktop',
        subMenus: [
            {
                path: '/dashboard/order/create',
                label: '创建订单',
                icon: 'desktop',
            },
            {
                path: '/dashboard/order/edit',
                label: '编辑订单',
                icon: 'desktop',
            }
        ]
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
        icon: 'desktop',
    },
    {
        path: '/dashboard/richtext',
        label: '测试富文本编辑',
        icon: 'desktop',
    }, 
    {
        path: '/dashboard/about',
        label: '关于我们',
        icon: 'desktop',
    }, 
]; 

export default menuList;