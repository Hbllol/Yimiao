// 引入Express
const express = require('express');
const api = require('./api');
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
const app = express();
// const Promise = require('es6-promise').Promise
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
// app.use(news)

// app.use(Promise)

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')))
//
// // 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//   const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//   res.send(html)
// });

// 监听30122端口
app.listen(30123);
console.log('success listen…………--30123')
