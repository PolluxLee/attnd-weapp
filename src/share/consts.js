// Input 组件类型
export const Type = { TEXT: 0, DATE: 1, TIME: 2, SELECT: 3, TEXT_SELECT: 4 }

// Button 组件类型
export const BtnType = { RELEASE: 0, UPDATE: 1, REMOVE: 2 }

// Model 里的组件类型
export const TypeInModal = { NOTITLE_TEXT: 0, TEXT: 1 }

// Toast 类型
export const ToastType = { SUCCESS: 0, FAIL: 1, LOADING: 2, HINT: 3 }

// 签到状态
export const Signin = { ARRIVED: 0, NOT_ARRIVED: 1 }

// API URL
const HOST = 'http://liziyi.top'
const PORT = 8888
const PREFIX = `${HOST}:${PORT}`

export const URL = {
  login: `${PREFIX}/api/login`,
  userInfo: `${PREFIX}/api/user/info`,
  attnd: `${PREFIX}/api/attnd`,
  historyAttndNames: `${PREFIX}/api/attnd/hisname`,
  historyGroupNames: `${PREFIX}/api/group/name`,
  attndList: `${PREFIX}/api/attndlist`,
  group: `${PREFIX}/api/group`,
  groupList: `${PREFIX}/api/group/list`,
  groupUserList: `${PREFIX}/api/group/userlist`,
  historyPlaceNames: `${PREFIX}/api/attnd/hisaddr`,
  attndSituation: `${PREFIX}/api/attnd/situation`,
  signIn: `${PREFIX}/api/attnd/signin`,
}

// Status Code
export const CODE = {
  GLOBAL_SUCCESS: 1000,
  GLOBAL_PARAM_INVALID: 1001,
  GLOBAL_PARAM_ERROR: 1002,
  GLOBAL_NOAUTH: 1003,
  GLOBAL_SYS_ERROR: 1004,
  GLOBAL_DB_ERROR: 1005,
  //work normal but execute not success
  GLOBAL_DB_FAILED: 1006,
  GLOBAL_USER_NOT_EXIST: 1007,

  USER_NOT_EXIST: 2001,
  USER_EXIST: 2002,

  ATTND_NOT_EXIST: 3001,
  ATTND_CIPHER_NOT_CORRESPOND: 3002,
  ATTND_HAS_SIGNIN: 3003,
  ATTND_EXPIRED: 3004,

  GROUP_NOTEXIS:4001,

  ADD_FLAG: 1,
  UPD_FLAG: 2,

  SIGNIN_OK: 1,
  SIGNIN_LOCATION_BEYOND: 2,
  SIGNIN_EXPIRED: 3,
  SIGNIN_NOT_EXIST: 4,

  ATTND_NORMA:1,
  ATTND_ENTR:2,
  ATTND_NOGROU:3,

  CIPHER_ATTND: 'A',
  CIPHER_ENTRY: 'G',
  CIPHER_NOGROUP: 'N',
  CIPHER_SINGLE: 'S',
}