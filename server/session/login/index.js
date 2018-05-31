module.exports = function (req, res){
    console.log('req.body',req.body)
    if (req.body.userName === 'admin' && req.body.password === 'admin') {
        res.json(200, {
            "model": {
                "deptName": "运营部",
                "loginName": "admin",
                "userName": "超级管理员",
                "userStatus": "01"
            },
            "responseCode": "000000",
            "responseMsg": "成功"
        });
    } else {
        res.json(200, {
            "model": {},
            "responseCode": "999999",
            "responseMsg": "用户名或密码错误，请重新输入！"
        });
    }
    
}