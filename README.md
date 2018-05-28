## attnd-weapp

**GPS 定位考勤小程序**

**后端：** https://github.com/WisperDin/attnd-server

### 使用步骤

#### 1. 克隆项目
```console
git clone https://github.com/PolluxLee/attnd-weapp.git
```

#### 2. 创建文件 **/project.config.json**
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

#### 3. 创建文件 **/utils/key.js**
```javascript
const key = {}
key.map = 'your map key'

export default key
```
关于腾讯地图 API [点击这里](http://lbs.qq.com/qqmap_wx_jssdk/index.html)

#### 4. 安装依赖
```console
cd attnd-weapp
npm install
```

### 特别感谢

[小程序组件化开发框架 WePY](https://tencent.github.io/wepy/)

[腾讯位置服务微信小程序 JavaScript SDK](http://lbs.qq.com/qqmap_wx_jssdk/index.html)

[课堂派](https://www.ketangpai.com/)