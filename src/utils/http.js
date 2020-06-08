import axios from 'axios'

export default {
  post(url,param) {
     return axios({
      method: 'post',
      // baseURL: 'http://111.230.239.224:8079/',
      baseURL: 'http://localhost:8989',
      url: url,
      data: param,
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Max-Age': '1209600'
        // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    })
  },
  get(url,data) {
    return axios({
      method: 'get',
      // baseURL: 'http://111.230.239.224:8079/',
      baseURL: 'http://localhost:8989',
      url: url,
      data: data,
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Max-Age': '1209600'
        // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    }).then(
      response => {
        return response.data
      }
    ).catch(function (error) {
      return error
    })
  }
}
