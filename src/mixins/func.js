import wepy from 'wepy'

export default class Func extends wepy.mixin {
  
  getTimeFormat(date, type, split) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
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
  getCurTime(type, split) {
    let date = new Date(Date.now())
    return this.getTimeFormat(date, type, split)
  }

  getTimeMsFromTimeS(timeS) {
    return timeS * 1000
  }

  getTimeSFromTimeMs(timeMs) {
    return Math.floor(timeMs / 1000)
  }



}
