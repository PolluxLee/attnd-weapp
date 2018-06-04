import zstore from './zstore'
import zlog, { LogLevel } from './zlog'
import { CODE } from '../share/consts'
const zajax = {
  get: () => {},
  post: () => {},
  postFD: () => {}
}

function createWxRequest(opts) {
  return new Promise((resolve, reject) => {
    if (!zstore.get(zstore.openid)) {
      reject('openid undefined')
    }
    const requestTask = wx.request({
      ...opts,
      success: res => {
        let model = {
          statusCode: res.statusCode,
          url: opts.url.slice(opts.url.indexOf('/api')),
          method: opts.method,
          reqData: opts.data,
          data: res.data
        }
        zlog.log(model)
        // Session 过期
        if (res.data.code === CODE.GLOBAL_NOAUTH) {
          zlog.setLog({ 
            level: LogLevel.WARN,
            msg: 'session 过期',
            loc: opts.url.slice(opts.url.indexOf('/api'))
          })
          wx.showModal({ title: '提示', content: '会话过期，请重启小程序' })
          reject('session 过期')
        }
        resolve(res)
      },
      fail: err => {
        let model = {
          url: opts.url.slice(opts.url.indexOf('/api')),
          method: opts.method,
          reqData: opts.data,
          err
        }
        zlog.log(model)
        zlog.setLog({ 
          level: LogLevel.ERROR,
          msg: String(err),
          loc: opts.url.slice(opts.url.indexOf('/api'))
        })
        reject(err)
      }
    })
  })
}

zajax.get = (url, data) => {
  let header = {
    'content-type': 'application/json',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'GET'
  return createWxRequest({ url, data, header, method })
}

zajax.post = (url, data) => {
  let header = {
    'content-type': 'application/json',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'POST'
  return createWxRequest({ url, data, header, method })
}

zajax.postFD = (url, data) => {
  let header = {
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'POST'
  return createWxRequest({ url, data, header, method })
}

export default zajax
