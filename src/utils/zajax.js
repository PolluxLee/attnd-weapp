import zstore from './zstore'
import zlog, { LogLevel } from './zlog'
import { URL, CODE } from '../share/consts'
const zajax = {
  get: () => {},
  post: () => {},
  postFD: () => {}
}

function createWxRequest(opts, from) {
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
          login(from)
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

zajax.get = function(url, data, from) {
  let header = {
    'content-type': 'application/json',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'GET'
  return createWxRequest({ url, data, header, method }, from)
}

zajax.post = function(url, data, from) {
  let header = {
    'content-type': 'application/json',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'POST'
  return createWxRequest({ url, data, header, method }, from)
}

zajax.postFD = function(url, data, from) {
  let header = {
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': wx.getStorageSync('cookie')
  }
  let method = 'POST'
  return createWxRequest({ url, data, header, method }, from)
}

function login(from) {
  wx.login({
    success: res => {
      zlog.log(res, 'wx.login')
      if (res.code) {
        if (res.code) zstore.set(zstore.openid, res.code)
        zajax.postFD(URL.login, { code: res.code })
          .then(res => {
            if(res.header['Set-Cookie']) {
              zstore.set(zstore.cookie, res.header['Set-Cookie'])
            }
            let userInfo = res.data.data
            let name = userInfo.name
            let stuid = userInfo.stu_id
            let id = userInfo.id
            let openid = userInfo.openid
            zlog.log({ id, openid, name, stuid }, 'zmid/setSelfinfo')
            if (Number.isInteger(id)) zstore.set(zstore.id, id)
            if (openid) zstore.set(zstore.openid, openid)
            if (name) zstore.set(zstore.name, name)
            if (stuid) zstore.set(zstore.stuid, stuid)
            if (from) {
              wx.redirectTo({url: from})
            }
          })
          .catch(err => {
            wx.showModal({ title: '提示', showCancel: false, content: '非常抱歉，小程序登录失败，请稍后再试' })
          })
      } else {
        zlog.log(res, 'wx.login')
        wx.showModal({ title: '提示', showCancel: false, content: '非常抱歉，小程序登录失败，请稍后再试' })
      }
    }
  });
}

export default zajax
