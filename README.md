## attnd-weapp

**Attendance for GZHU.**

## usage

### Create file **/project.config.json**
```json
{
  "description": "Attendance by WeApp.",
  "setting": {
    "urlCheck": true,
    "es6": false,
    "postcss": false,
    "minified": false
  },
  "compileType": "miniprogram",
  "appid": "your appid",
  "projectname": "attnd-weapp",
  "miniprogramRoot": "./dist"
}
```

### Create file **/utils/key.js**
```javascript
const key = {}
key.map = 'your map key'

export default key
```
关于腾讯地图 API [点击这里](http://lbs.qq.com/qqmap_wx_jssdk/index.html)