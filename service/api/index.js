import http from '../http'
class Api {
  constructor (http) {
    this.http = http
  }
  article (params = {}, showLoading = true) {
    return this.http.get('/webapi/query')
  }
}

export default new Api(http)