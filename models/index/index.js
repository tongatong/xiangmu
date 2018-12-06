import { HTTP } from '../../utils/http.js'

class IndexModel extends HTTP {
  getDataLatest(callback) { // 形参
    this.request({
      url: '/classic/latest',
      success(res) {
        //  console.log(res)
        callback(res)
      }
    })
  }
}

export { IndexModel }
