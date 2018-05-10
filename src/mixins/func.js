import wepy from 'wepy'

export default class Func extends wepy.mixin {
  /**
   * @param {string} type 'date' or 'time'
   */
  getCurTime(type) {
    let date = new Date(Date.now())
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    switch (true) {
      case type === 'date': 
        return [year, month, day].map(n => { n=n.toString(); return n[1] ? n : '0' + n }).join('-')
      case type === 'time':
        return [hour, minute].map(n => { n=n.toString(); return n[1] ? n : '0' + n }).join(':')
      default: 
        return ''
    }
  }

}
