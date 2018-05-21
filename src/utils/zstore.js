const zstore = {
  openid:  'openid',
  userName:  'username',
  stuId:  'stuid',
  cookie:  'cookie',
  id: 'id',
  set:  (key, value) => {
    if (!value) return
    wx.setStorageSync(key, value)
  },
  get:  (key) => {
    return wx.getStorageSync(key)
  }
}

export default zstore