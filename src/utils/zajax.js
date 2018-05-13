const zajax = {
  get: () => {},
  post: () => {},
  postFD: () => {}
}

function createWxRequest(opts) {
  return new Promise((resolve, reject) => {
    const requestTask = wx.request({
      ...opts,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

zajax.get = (url, data) => {
  let header = { 'content-type': 'application/json' }
  let method = 'GET'
  return createWxRequest({ url, data, header, method })
}

zajax.post = (url, data) => {
  let header = { 'content-type': 'application/json' }
  let method = 'POST'
  return createWxRequest({ url, data, header, method })
}

zajax.postFD = (url, data) => {
  let header = { 'content-type': 'application/x-www-form-urlencoded' }
  let method = 'POST'
  return createWxRequest({ url, data, header, method })
}

export default zajax
