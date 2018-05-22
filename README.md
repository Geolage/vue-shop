## Vue-Shop

An online-shop designed and developed by VueJS and NodeJS, along with their related tech stacks.

vue-shop，一个采用VueJS和NodeJS及其相关技术栈设计和开发的网上商店。

## 技术栈

Vue2 + VueRouter + Vuex + ElementUI + Webpack + ES6 + Axios + SCSS + NodeJS + MongoDB + ...

## 关于接口数据

由于项目开发比较紧促，为了节省时间，此次先暂时使用github上的另一位开发者提供的接口，通过爬虫脚本将所获得的数据写进database作为缓存，以方便今后的使用。

注：商品数据通过爬虫抓取写入数据库 (eventproxy + superagent)，因为数据结构十分复杂，所以在首页热门部分通过转发包装简化了数据，__如果你发现部分商品不见了，可能是原有的数据结构已经发生了改变__。

这只是权宜之计，日后将会利用空余时间，独立设计和搭建一个完整的小型数据库服务器。


## 运行

```shell

git clone https://github.com/Geolage/vue-shop.git

cd vue-shop

npm install    // 如果网速慢，建议使用cnpm安装

npm run dev

// 如果运行出现代理错误，请检查 config 文件目录下的 index.js 文件里的 proxyTable 配置是否正确！！

// 通过运行node-api请求本地api代理应为
http://127.0.0.1:6666     // 即 localhost:6666

```

## 账户

__注:为了更好地体验整个商店服务流程,请用户自己注册一个账号登录使用__

默认账号如下：

```txt
 账号: admin  密码: admin
```

## 功能

- [x] 登录、登出功能
- [x] 注册
- [x] 加入、删除、修改购物
- [x] 新增、修改、删除收货地址
- [x] 下单功能
- [x] 支付功能 -- 由于没权限申请到蚂蚁金服支付宝开发接口,因此只是模拟支付
- [x] 商品详情
- [x] 个人中心
- [x] 订单列表
- [x] 更换头像 -- 头像暂时上传到七牛云

## 待续

> 更多功能正在开发当中，后期将会陆续补上
> 细节和bugs也将会不断完善和修复
> 如果您有更好的idea或者任何疑问，欢迎Issues，我将永远保持积极学习的态度，谢谢！

## 项目结构

```txt
  ... vue-shop
  │
  ├── client                                          // client目录
  │   ├── build                                       // webpack配置文件
  │   ├── config                                      // 项目打包路径
  │   ├── dist                                        // 打包文件
  │   ├── src                                         // 源码目录
  │   │   ├── api                                     // 请求接口
  │   │   ├── common                                  // 公共组件
  │   │   ├── components                              // 组件
  │   │   ├── page                                    // 页面
  │   │   │   └── Cart                                // 购物车
  │   │   │   └── Checkout                            // 提交订单
  │   │   │   └── Goods                               // 商品
  │   │   │       ├── goods                           // 商品列表
  │   │   │       ├── goodsDetails                    // 商品详情
  │   │   │   └── Home                                // 主页
  │   │   │   └── Login                               // 登录
  │   │   │   └── Order                               // 订单
  │   │   │       ├── order                           // 商品列表
  │   │   │       ├── payment                         // 提交订单
  │   │   │       ├── paysuccess                      // 提交成功
  │   │   │   └── User                                // 个人中心
  │   │   │       ├── children
  │   │   │       │   ├── addressList                 // 地址列表
  │   │   │       │   ├── information                 // 个人信息
  │   │   │       │   └── order                       // 订单列表
  │   │   │   └── index.vue                           // 主页
  │   │   ├── store                                   // vuex的状态管理
  │   │   │   ├── action.js                           // 配置actions
  │   │   │   ├── index.js                            // 引用vuex，创建store
  │   │   │   ├── modules                             // store模块
  │   │   │   ├── mutation-types.js                   // 定义常量muations名
  │   │   │   └── mutations.js                        // 配置mutations
  │   │   ├── App.vue                                 // 页面入口文件
  │   │   ├── main.js                                 // 程序入口文件，加载各种公共组件
  │   ├── favicon.ico                                 // 图标
  │   ├── index.html                                  // 入口html文件
  │
  ├── server                                          // server目录
  │   ├── bin                                         // server执行文件目录
  │   │    └── www                                    // 服务器执行配置
  │   ├── image                                       // 图片存放目录
  │   ├── init                                        // server初始化配置
  │   │     └── admin.js                              // 初始化连接数据库用户
  │   │     └── getGoods.js                           // 抓取商品数据
  │   │     └── initData.js                           // 初始化数据
  │   ├── models                                      // data模型配置
  │   │     └── goods.js                              // 商品模型
  │   │     └── user.js                               // 用户模型
  │   ├── public                                      // 公共文件目录
  │   │     ├── stylesheets                           // 样式目录
  │   ├── routes                                      // server路由配置
  │   │     └── goods.js                              // 商品相关
  │   │     └── index.js                              // 首页相关
  │   │     └── users.js                              // 用户相关
  │   ├── util                                        // 工具库
  │   │     └── dateFormat.js                         // 日期格式化模块
  │   ├── views                                       // server视图（尚未完成）
  │   │     └── error                                 // 404页面
  │   │     └── index                                 // 首页
  │   │     └── layout                                // 布局
  │   ├── app.js                                      // server入口文件
  │   

```

## 更多内容正在完善之中 ...
