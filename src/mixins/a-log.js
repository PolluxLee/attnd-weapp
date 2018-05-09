import wepy from 'wepy'

export default class ALog extends wepy.mixin {

  // console - [info, log, warn, error]
  print(msg, type) {
    // return
    switch (type) {
      case 'info':
        console.info(msg)
        break
      case 'warn':
        console.warn(msg)
        break
      case 'error':
        console.error(msg)
        break
      case 'log':
      default:
        console.log(msg)
        break
    }
  }

  // console - [info, log, warn, error]
  mLog(msg, type) {

  }

}
