import wepy from 'wepy'

export default class Constant extends wepy.mixin {

  data = {
    Type: { TEXT: 0, DATE: 1, TIME: 2, SELECT: 3 },
  }

}
