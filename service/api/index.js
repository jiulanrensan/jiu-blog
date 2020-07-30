import http from '../http'
class Api {
  constructor (http) {
    this.http = http
  }

  article (params = {}, options = {showLoading: true}) {
    return this.http.post('/webapi/query', params, options)
  }

  test (params = {}, options) {
    return 1234
  }
}

export const api = new Api(http)