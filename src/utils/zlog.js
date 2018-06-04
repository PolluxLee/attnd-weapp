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
const timeLimit = 10000
const lenLimit = 20
const switcher = true  // 日志开关

/**
 * @param {level, msg, loc, oper} model：分别是等级，信息，定位，操作
 */
zlog.setLog = function(model) {
  if (!switcher) return
  if (!isLogValid(model)) return
  let logTime = zstore.get(zstore.logTime)
  let curTime = Date.now()
  model.time = curTime  // 添加时间戳
  cache.push(model)
  // 大于给定长度，发送日志
  if (cache.length >= lenLimit) {
    zstore.set(zstore.logTime, curTime)
    sendLog(cache.slice())
    cache = []
    return
  }
  // 距离上次请求发送日志的时间间隔大于给定时间，发送日志
  // if (curTime - logTime > timeLimit) {
  //   zstore.set(zstore.logTime, curTime)
  //   this.sendLog(cache.slice())
  //   cache = []
  //   return
  // }
}

function isLogValid(model) {
  return !!(model && model.level && model.msg)
}

zlog.flushLog = function() {
  let logs = cache
  cache = []
  console.warn(logs)
}

function sendLog(arr) {
  let logs = []
  if (!Array.isArray(arr)) {
    logs = cache
  } else {
    logs = arr
  }
  console.warn(logs)
}

export default zlog
export const LogLevel = { DEBUG: 'debug', INFO: 'info', WARN: 'warn', ERROR: 'error', FATAL: 'fatal' }