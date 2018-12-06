import { config } from "../config.js"

//根据错误代码，返回相应的提示
const tips = {
  1: '抱歉，出错了',
  1005: 'appkey无效',
  3000: '期刊不存在'
}

//请求类
class HTTP{
    request(params){
      // console.log(params)
      if(!params.methos){
        params.method = "GET"
      }
      wx.request({
        url: config.api_base_url + params.url ,
        method:params.method,
        data:params.data,
        header: {
          'content-type': 'application/json',
           'appkey': config.appKey
        },
        success:(res)=>{  //成功
          let code = res.statusCode.toString()
          if (code.startsWith('2')) {
            params.success && params.success(res.data)
          } 
          // else {
          //   let error_code = res.data.error_code
          //   this._show_error(error_code)
          // }
        },
        // fail: (err) => { // 失败 - 断网...
        //   this._show_error(1)
        // }
      })
    }
}


export { HTTP }