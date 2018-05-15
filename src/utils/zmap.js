const zmap = {}
import key from './key'

// 引入 SDK 核心类
var QQMapWX = require('./qqmap-wx-jssdk.js')

// 实例化 API 核心类
var qqMap = new QQMapWX({ key: key.map })

// 获取经纬度等信息
zmap.getLocation = () => {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 通过经纬度获取地址名称
zmap.getAddrName = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    qqMap.reverseGeocoder({
      location: {
        latitude,
        longitude
      },
      success: res => {
        let status = res.status
        let message = res.message
        let result = res.result
        console.log(result)
        if (status !== 0) reject({ status, message })
        resolve(result.address)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// 通过经纬度获得两点距离
zmap.getDistance = (lat1, lng1, lat2, lng2) => {
  return new Promise((resolve, reject) => {
    const DEF_PI = 3.14159265359 // PI
    const DEF_2PI = 6.28318530712 // 2*PI
    const DEF_PI180 = 0.01745329252 // PI/180.0
    const DEF_R = 6370693.5 // radius of earth
    let ew1, ns1, ew2, ns2
    let dx, dy, dew
    let distance
    // 角度转换为弧度
    ew1 = lng1 * DEF_PI180
    ns1 = lat1 * DEF_PI180
    ew2 = lng2 * DEF_PI180
    ns2 = lat2 * DEF_PI180
    // 经度差
    dew = ew1 - ew2
    // 若跨东经和西经180 度，进行调整
    if (dew > DEF_PI)
        dew = DEF_2PI - dew
    else if (dew < -DEF_PI)
        dew = DEF_2PI + dew
    dx = DEF_R * Math.cos(ns1) * dew // 东西方向长度(在纬度圈上的投影长度)
    dy = DEF_R * (ns1 - ns2) // 南北方向长度(在经度圈上的投影长度)
    // 勾股定理求斜边长
    distance = Math.sqrt(dx * dx + dy * dy).toFixed(0)
    resolve(distance)
  })
}

export default zmap