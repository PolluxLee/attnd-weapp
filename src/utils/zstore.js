const zstore = {
  openid:  'openid',
  name:  'username',
  stuid:  'stuid',
  cookie:  'cookie',
  id: 'id',
  logTime: 'logtime',
  set:  (key, value) => {
    if (value === null || value === undefined) return
    wx.setStorageSync(key, value)
  },
  get:  (key) => {
    return wx.getStorageSync(key)
  }
}

export default zstore