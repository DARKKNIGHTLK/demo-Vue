import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 轻量级进度条
import 'nprogress/nprogress.css' // 轻量级进度条样式
NProgress.configure({ease:'ease',speed:1500});



function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  NProgress.done(true)
  return {
    status: -404,
    msg: '无法连接到服务器'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message({
      showClose: true,
      message: res.msg,
      type: 'error'
    })
  }
  if (res.data && (!res.data.success)) {
  }
  NProgress.done(true)
  return res
}

export default {
  post (url, data) {
    // NProgress.set(0.4)
    return axios({
      method: 'post',
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
      (response) => {
        return response
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    ).catch(function (error) {
      console.log(error)
      alert(error)
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      // baseURL: 'http://111.230.239.224:8079/',
      baseURL: 'http://localhost:8989',
      url,
      params, // get 请求时带的参数
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
        // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    ).catch(function (error) {
      console.log(error)
      alert(error)
    })
  }
}
