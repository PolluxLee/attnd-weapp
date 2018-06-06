import zajax from './zajax'
import zstore from './zstore'
import { URL, CODE } from '../share/consts'
import zlog, { LogLevel } from './zlog'
const zmid = {}

// 设置个人信息到 storage
// { id, openid, name, stuid }
zmid.setSelfinfo = function({ id, openid, name, stuid }) {
  zlog.log({ id, openid, name, stuid }, 'zmid/setSelfinfo')
  if (Number.isInteger(id)) zstore.set(zstore.id, id)
  if (openid) zstore.set(zstore.openid, openid)
  if (name) zstore.set(zstore.name, name)
  if (stuid) zstore.set(zstore.stuid, stuid)
}

// 验证 openid
zmid.checkOpenid = function() {
  let openid = zstore.get(zstore.openid)
  return !!openid
}

// 获取 openid
zmid.getOpenid = function() {
  return zstore.get(zstore.openid)
}

// 验证个人信息
zmid.checkSelfinfo = () => {
  let id = zstore.get(zstore.id)
  let name = zstore.get(zstore.name)
  zlog.log({ id, name }, 'zmid/checkSelfinfo')
  if (typeof name === 'string' && name && Number.isInteger(id)) {
    return true
  }
  return false
}

// 从后端获取个人信息
zmid.getFreshSelfinfo = async function() {
  let name
  let stuid
  let id
  let openid = this.getOpenid()
  await zajax.get(URL.userInfo, { openid })
  .then(res => {
    let body = res.data
    zlog.log({ name, stuid, id }, 'zmid/getSelfinfo/backend')
    let code = body.code
    zlog.setLog({
      level: LogLevel.INFO,
      msg: `${code}`,
      loc: 'utils/zmid.js function zmid/getFreshSelfinfo()'
    })
    if (code !== CODE.GLOBAL_SUCCESS) return {}
    id = body.data.id
    name = body.data.name
    stuid = body.data.stu_id
    // 保存到 storage
    this.setSelfinfo({ id, name, stuid })
  })
  .catch(err => {
    zlog.error(err, 'zmid/getSelfinfo')
  })
  if (name && Number.isInteger(id)) {
    return { name, stuid, id }
  }
  return {}
}

// 获取个人信息
zmid.getSelfinfo = function() {
  let name = zstore.get(zstore.name)
  let stuid = zstore.get(zstore.stuid)
  let id = zstore.get(zstore.id)
  if (name && Number.isInteger(id)) {
    zlog.log({ name, stuid, id }, 'zmid/getSelfinfo/zstore')
    return { name, stuid, id }
  }
  return {}
}

zmid.login = function() {
  wx.login({
    success: res => {
      zlog.log(res, 'wx.login')
      if (res.code) {
        zmid.setSelfinfo({ openid: res.code })
        zajax.postFD(URL.login, { code: res.code })
          .then(res => {
            if(res.header['Set-Cookie']) {
              zstore.set(zstore.cookie, res.header['Set-Cookie'])
              zlog.log(res.header['Set-Cookie'], 'cookie')
            }
            let userInfo = res.data.data
            let name = userInfo.name
            let stuid = userInfo.stu_id
            let id = userInfo.id
            let openid = userInfo.openid
            this.setSelfinfo({ name, stuid, id, openid })
          })
          .catch(err => {})
      } else {
        zlog.log(res, 'wx.login')
        wx.showModal({ title: '提示', showCancel: false, content: '非常抱歉，小程序启动失败，请稍后再试' })
      }
    }
  });
}


export default zmid