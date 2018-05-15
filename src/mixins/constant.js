import wepy from 'wepy'

export default class Constant extends wepy.mixin {

  data = {
    Type: { TEXT: 0, DATE: 1, TIME: 2, SELECT: 3, TEXT_SELECT: 4 },
    BtnType: { RELEASE: 0, UPDATE: 1, REMOVE: 2 },
  }

}
