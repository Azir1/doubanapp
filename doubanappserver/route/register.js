const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const urlParser = parser.urlencoded({ extended: false })
const Coluser = require('./userdb')
const jwt = require('jsonwebtoken')
router.post('/register', urlParser, (req, res) => {
  const username = req.body.username
  let password = req.body.password
  Coluser.find({
    username
  }).then(ok => {
    if (ok.length > 0) {
      res.send({
        state: 4,
        msg: '用户名已经存在'
      })
    } else {
      const user = new Coluser({
        username,
        password
      })
      user.save().then(ok => {
        res.send({
          msg: '注册成功',
          state: 1
        })
      }).catch(err => {
        res.send({
          msg: '注册失败',
          state: 2
        })
      })
    }
  })
})
router.post('/login', urlParser, (req, res) => {
  const uname = req.body.username
  let upass = req.body.password
  Coluser.find({
    username:uname,
    password:upass
  }).then(ok=>{
    if (ok.length>0) {
      let usermsg = {
        login:true
      }
      let key = 'asdfjk'
      const token = jwt.sign(usermsg,key)
      res.send({
        msg: '登录成功',
        state:1,
        token
      })
    }else{
      res.send({
        msg: '用户名或密码错误',
        state:2
      })
    }
  })
})
router.post('/token',urlParser,(req,res)=>{ //解密
  let key = 'asdfjk'
  jwt.verify(req.body.token,key,(err,ok)=>{
    if (!ok) {
      res.send({
        state:4,
        msg:'请先登录'
      })
    }
  })
})

module.exports = router
