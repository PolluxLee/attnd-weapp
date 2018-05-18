import wepy from 'wepy'
import Toast from 'wepy-com-toast'
import { ToastType } from '../share/consts'
import { Icon } from '../assets/icon/icon'

export default class AToast extends wepy.mixin {

  toast(type, title, duration) {
    if (!title) return
    let data = { title, duration }
    switch (type) {
      case ToastType.SUCCESS:
        data.img = Icon.success
        break
      case ToastType.LOADING:
        data.img = Icon.loading
        break;
      case ToastType.FAIL:
      default:
        data.img = Icon.failure
        break
    }
    this.$invoke('toast', 'show', data)
  }
}
