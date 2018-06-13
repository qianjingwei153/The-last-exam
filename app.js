const express = require('express')
const pug = require('pug')

const app = express()
let rawList=[
  {id: 1, name: "zzz"},
  {id: 2, name: "xxx"},
  {id: 23, name: "x1xx"}
];
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/delete/:id', function(req, res){  let id = parseInt(req.params.id);  rawList = rawList.filter(function(data){    return data.id !== id  }) 
 res.redirect("/list")}) //write by 黄正超

app.get('/list', function(req, res) {
  res.render('list', {list:rawList})
})

app.get('/update/:id', function(req, res) {
  
  res.render("update")
})//write by 钱经玮
app.get('/add', function(req, res) {  let id=parseInt(req.param);
    res.render('add', { title: 'Hey', message: 'Hello there!' })})//write by 刘子瑞


app.get('*', function (req, res) {
  res.render('index', { title: '图书管理系统', message: '图书管理系统' })
  
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})