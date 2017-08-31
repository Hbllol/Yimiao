const querystring = require('querystring')

// 接口请求地址
const JsUtils = {
  'FINAL_API_URL': 'http://192.168.20.45:1685/v1/',
  // 对象转转成字符
  querystr (opts) {
    return querystring.stringify(opts)
  },
  isEmptyObject (e) {
    let t
    for (t in e)
      return !1
    return !0
  }
}

module.exports = JsUtils

