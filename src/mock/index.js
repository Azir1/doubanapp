const Mock = require('mockjs')
// 注意，要写上请求数据的方式get/post
Mock.mock('/mock/homelist','get',require('./data/homelist.json'))