// date format
export function getTimeFormat(date, type, split) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  let arr = [year, month, day, hour, minute]
  for (let el of arr) {
    if (!Number.isInteger(el)) return ''
  }
  switch (true) {
    case type === 'date': 
      let str1 = split ? split : '-'
      return [year, month, day].map(n => { n=n.toString(); return n[1] ? n : '0' + n }).join(str1)
    case type === 'time':
      let str2 = split ? split : ':'
      return [hour, minute].map(n => { n=n.toString(); return n[1] ? n : '0' + n }).join(str2)
    default: 
      return ''
  }
}

/**
 * @param {string} type 'date' or 'time'
 */
export function getCurTime(type, split) {
  let date = new Date(Date.now())
  return getTimeFormat(date, type, split)
}

// timeS to timeMs
export function getTimeMsFromTimeS(timeS) {
  return timeS * 1000
}

// timeMs to timeS
export function getTimeSFromTimeMs(timeMs) {
  return Math.floor(timeMs / 1000)
}

//date string to timeS
export function dateToTimeS(dateString) {
  let timeMs = Date.parse(dateString)
  return Math.floor(timeMs / 1000)
}

//date string to timeMs
export function dateToTimeMs(dateString) {
  return Date.parse(dateString)
}

//check isNumber
export function isNumber(num) {
  if (typeof num === 'number' && !Number.isNaN(num) && Number.isFinite(num))
    return true
  return false
}