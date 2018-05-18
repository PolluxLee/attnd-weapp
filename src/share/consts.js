// Input 组件类型
export const Type = { TEXT: 0, DATE: 1, TIME: 2, SELECT: 3, TEXT_SELECT: 4 }

// Button 组件类型
export const BtnType = { RELEASE: 0, UPDATE: 1, REMOVE: 2 }

// Model 里的组件类型
export const TypeInModal = { NOTITLE_TEXT: 0, TEXT: 1 }

// Toast 类型
export const ToastType = { SUCCESS: 0, FAIL: 1, LOADING: 2 }

// API URL
const HOST = 'http://liziyi.top'
const PORT = 8888
const PREFIX = `${HOST}:${PORT}`
export const URL = {
  login: `${PREFIX}/api/login`,
  userInfo: `${PREFIX}/api/user/info`,
  attnd: `${PREFIX}/api/attnd`,
}