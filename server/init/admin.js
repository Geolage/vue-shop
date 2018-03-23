
const mongoose    = require('mongoose')
const User        = require('./../models/user')
// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/vue-shop', {useMongoClient: true})

function initAdmin() {
    return new Promise(resolve => {
        // 初始化（新增）记录
        User.create({
            "userId": "001",
            "name": "吴刚",
            "avatar": "http://osc9sqdxe.bkt.clouddn.com/defaultAvatar.jpg",
            "userName": "admin",
            "userPwd": "admin",
            "orderList": [],
            "cartList": [],
            "addressList": []
        }, (err) => {
            if (err) console.log('发生错误');
            resolve()
        })
    })
}
module.exports = initAdmin