import zstore from './zstore'
import zlog from './zlog'
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
        zlog.log({
          statusCode: res.statusCode,
          url: opts.url.slice(opts.url.indexOf('/api')),
          method: opts.method,
          reqData: opts.data,
          data: res.data
        })
        resolve(res)
      },
      fail: err => {
        zlog.log({
          url: opts.url.slice(opts.url.indexOf('/api')),
          method: opts.method,
          reqData: opts.data,
          err
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
