import zstore from './zstore'
const zlog = {}

zlog.log = function(data, loc) {
  if (!loc) {
    console.log(data)
    return
  }
  console.log(loc, data)
}

zlog.warn = function(data, loc) {
  if (!loc) {
    console.warn(data)
    return
  }
  console.warn(loc, data)
}

zlog.error = function(data, loc) {
  if (!loc) {
    console.error(data)
    return
  }
  console.error(loc, data)
}

/**
 * 发送日志
 * 1. 到达日志缓存数量：20条
 * 2. 到达指定时间：10s
 * 3. 用户杀死小程序
 */
let cache = []
let timeLimit = 10000
let lenLimit = 20

/**
 * @param {level, msg, loc, oper} msg：分别是等级，信息，定位，操作
 */
zlog.setLog = function(msg) {
  let logTime = zstore.get(zstore.logTime)
  let curTime = Date.now()
  cache.push(msg)

  if (cache.length >= lenLimit) {
    this.sendLog(cache.slice())
    cache = []
    return
  }
  if (curTime - logTime > timeLimit) {
    zstore.set(zstore.logTime, curTime)
    this.sendLog(cache.slice())
    cache = []
    return
  }
}

zlog.sendLog = function(arr) {
  let logs = []
  if (!Array.isArray(arr)) logs = cache.slice()
  else logs = arr

}

export default zlog