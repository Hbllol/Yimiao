'use strict';
const express = require('express');
const querystring = require('querystring');
const router = express.Router();
const request = require('superagent');
const JsUtils = require('./utils');

// 测试接口
router.post('/api/login/getLogin', (req, res) => {
  let moduleid = req.body.moduleid;
  console.log('------------post进来了111');
  request.get(JsUtils.FINAL_API_URL + '/News/FindHomeBannerList').query(JsUtils.querystr({'moduleid': moduleid}))
    .end((err, sres) => {
      console.log(sres);
      res.send(sres.body)
    })
});

// 首页轮播
router.post('/api/home/bannerlist', (req, res) => {
  let moduleId = req.body.moduleId;
  console.log('------post进来了--moduleId');
  request.get(JsUtils.FINAL_API_URL + 'News/FindHomeBannerList').query(JsUtils.querystr({'moduleId': moduleId}))
    .end((err, sres) => {
      res.send(sres.body)
    })
});
// 企服子公司
router.post('/api/DssquareWap/CompanyList', (req, res) => {
  console.log('------post进来了2222222222--moduleId');
  request.get(JsUtils.FINAL_API_URL + 'DssquareWap/CompanyList ').query()
    .end((err, sres) => {
      res.send(sres.body)
    })
});
// 动态数字
router.post('/api/Home/Data', (req, res) => {
  console.log('------post进来了--Data');
  request.get(JsUtils.FINAL_API_URL + 'Home/Data')
    .end((err, sres) => {
      res.send(sres.body)
    })
});
// 首页房源精选
router.post('/api/home/recommend', (req, res) => {
  let pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize,
    cityName = req.body.cityName
  console.log(`-------------首页房源精选${pageIndex}------${pageSize}-----${cityName}`)
  request.get(JsUtils.FINAL_API_URL + '/House/Recommend').query(JsUtils.querystr({'pageIndex': pageIndex, 'pageSize': pageSize, 'cityName': cityName}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 首页办公租金
router.post('/api/House/CateByUnitPrice', (req, res) => {
  let pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize,
    cityName = req.body.cityName
  console.log(`-------------首页办公租金分类${pageIndex}------${pageSize}-----${cityName}`)
  request.get(JsUtils.FINAL_API_URL + '/House/CateByUnitPrice').query(JsUtils.querystr({'cityName': cityName}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 首页办公面积
router.post('/api/House/CateByArea', (req, res) => {
  let pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize,
    cityName = req.body.cityName
  console.log(`-------------首页房源精选${pageIndex}------${pageSize}-----${cityName}`)
  request.get(JsUtils.FINAL_API_URL + '/House/CateByArea').query(JsUtils.querystr({'pageIndex': pageIndex, 'pageSize': pageSize, 'cityName': cityName}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 东朔活动banner
router.post('/api/home/getHomeNewsList', (req, res) => {
  let moduleid = req.body.moduleid, nums = req.body.nums;
  console.log('---------------活动banner' + nums);
  console.log(req.headers.token)
  request.get(JsUtils.FINAL_API_URL + '/News/FindHomeNewsList').query(JsUtils.querystr({'moduleid': moduleid, 'nums': nums}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body;
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 活动banner
router.post('/api/house/list', (req, res) => {
  let cityName = req.body.cityName, // 城市名称
    pageIndex = req.body.pageIndex, // 页码
    pageSize = req.body.pageSize // 页的大小

  console.log('---------------lsit')
  request.get(JsUtils.FINAL_API_URL + '/House/List').query(JsUtils.querystr({
    'cityName': cityName,
    'pageIndex': pageIndex,
    'pageSize': pageSize
  }))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      console.log(sres)
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log('------------------1----------------')
      console.log(msg)
    })
});
// 条件搜索
router.post('/api/house/search', (req, res) => {
  console.log('---------------条件搜索')
  let pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize,
    cityName = req.body.cityName,
    keyWords = req.body.keyWords
  request.get(JsUtils.FINAL_API_URL + 'House/Search').query(JsUtils.querystr({'cityName': cityName, 'keyWords': keyWords, 'pageIndex': pageIndex, 'pageSize': pageSize}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 楼盘列表 banner
router.post('/api/building/getBuildingPicture', (req, res) => {
  let buildingId = req.body.buildingId
  request.get(JsUtils.FINAL_API_URL + '/Building/Picture').query(JsUtils.querystr({'buildingId': buildingId}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 楼盘列表标题
router.post('/api/building/getBuildingtitle', (req, res) => {
  let buildingId = req.body.buildingId,
    buildingType = req.body.buildingType
  request.get(JsUtils.FINAL_API_URL + '/Building/Title').query(JsUtils.querystr({'buildingId': buildingId, 'buildingType': buildingType}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 楼盘列表 户型列表
router.post('/api/building/inddetail', (req, res) => {
  let buildingId = req.body.buildingId,
    pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize
  request.get(JsUtils.FINAL_API_URL + '/Building/IndDetail').query(JsUtils.querystr({'buildingId': buildingId, 'pageIndex': pageIndex, 'pageSize': pageSize}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      if (sres.body.Code === 2000) {
        res.send(sres.body)
      }
    })
});
// 楼盘列表 联合办公
router.post('/api/building/coDetail', (req, res) => {
  let buildingId = req.body.buildingId,
    pageIndex = req.body.pageIndex,
    pageSize = req.body.pageSize
  request.get(JsUtils.FINAL_API_URL + '/Building/CoDetail').query(JsUtils.querystr({'buildingId': buildingId, 'pageIndex': pageIndex, 'pageSize': pageSize}))
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 楼盘列表 简介
router.post('/api/building/detailInfo', (req, res) => {
  let buildingId = req.body.buildingId
  console.log(`---Building/Intro-- post进来--buildingId:${buildingId}----`)
  request.get(JsUtils.FINAL_API_URL + '/Building/Intro').query(JsUtils.querystr({'buildingId': buildingId}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 相似楼盘
router.post('/api/Building/Similar', (req, res) => {
  let buildingId = req.body.buildingId
  request.get(JsUtils.FINAL_API_URL + 'Building/Similar').query(JsUtils.querystr({'buildingId': buildingId}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 相似空间
router.post('/api/Cowork/Similar', (req, res) => {
  let buildingId = req.body.buildingId
  request.get(JsUtils.FINAL_API_URL + 'Cowork/Similar').query(JsUtils.querystr({'buildingId': buildingId}))
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 联合办公详情
router.post('/api/House/CoDetail', (req, res) => {
  let Id = req.body.houseId,
    BuildingId = req.body.BuildingId
  console.log(`---House/CoDetail -- post进来--houseId:${Id}---BuildingId--${BuildingId}----`)
  request.get(JsUtils.FINAL_API_URL + '/House/CoDetail').query(JsUtils.querystr({'houseId': Id, 'BuildingId': BuildingId}))
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 户型列表详情
router.post('/api/House/IndDetail', (req, res) => {
  let houseId = req.body.houseId
  console.log(`------------House/IndDetail ---- post进来了---paras.houseId参数为:${houseId}---------`)
  request.get(JsUtils.FINAL_API_URL + '/House/IndDetail').query(JsUtils.querystr({'houseId': houseId}))
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});

// 预约看房
router.post('/api/account/visitHouse', (req, res) => {
  console.log('---------------条件搜索')
  let Phone = req.body.Phone,
    HouseId = req.body.HouseId
  request.post(JsUtils.FINAL_API_URL + 'Account/VisitHouse')
    .send({'Phone': Phone, 'HouseId': HouseId })
    .set({'token': req.headers.token || ''})
    .end((err, sres) => {
      console.log(sres)
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
    })
});

// 发送短信
router.post('/api/system/valCode', (req, res) => {
  let Phone = req.body.Phone
  console.log(`------------System/ValCode ---- post进来了---Phone:${Phone}---------`)
  request.post(JsUtils.FINAL_API_URL + 'System/ValCode')
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .send(`{"Phone":${Phone}}`)
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});

// 委托找房
router.post('/api/account/findHouse', (req, res) => {
  let requirements = req.body.requirements,
    userName = req.body.userName,
    mobile = req.body.mobile,
    verifyCode = req.body.verifyCode
  console.log(`------------委托找房 ------${requirements}---${userName}--${mobile}--${verifyCode}`)
  request.post(JsUtils.FINAL_API_URL + 'Account/FindHouse')
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .send(`{"Requirements": "${requirements}", "Name": "${userName}", "Phone": ${mobile}, "VerifyCode": ${verifyCode}, "UserId": 0, "AppId": 1, "SourceId": 1}`)
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});
// 携手东朔
router.post('/api/account/houseJoin', (req, res) => {
  let requirements = req.body.requirements,
    userName = req.body.userName,
    mobile = req.body.mobile,
    verifyCode = req.body.verifyCode
  console.log(`------------携手东朔 ------${requirements}---${userName}--${mobile}--${verifyCode}`)
  request.post(JsUtils.FINAL_API_URL + 'Account/HouseJoin')
    .set({'Content-Type': 'application/json', 'token': req.headers.token || ''})
    .send(`{"Requirements": "${requirements}", "Name": "${userName}", "Phone": ${mobile}, "VerifyCode": ${verifyCode}, "UserId": 0, "AppId": 1, "SourceId": 1}`)
    .end((err, sres) => {
      let msg = sres.body
      if (JsUtils.isEmptyObject(sres.body)) {
        msg = sres.text
      }
      if (msg.Code === 2000) {
        res.send(msg)
      } else {
        res.send(msg)
      }
      console.log(msg)
    })
});


module.exports = router;
