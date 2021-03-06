const mock = {}

mock.post = (url, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      resolve()
    }, 1000)
  })
}

mock.get = mock.post

mock.getSelfInfo = (url, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let data = {
        "code": 1000,
        "msg": "",
        "data": {
            "id": 1,
            "openid": "fdsafe51515",
            "stu_id": "1506100006",
            "name": "黎梓毅",
            "remark": {},
            "status": 0
        }
      }
      resolve(data)
    }, 1000)
  })
}

mock.getGroupList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let data = ['计科151','计科152','网络151','网络152','软件151','软件152']
      resolve(data)
    }, 1000)
  })
}

mock.getAttndNames = () => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let data = ['C++','计网','操作系统','阿历克斯大家了发就是利空打击flak就我欸如','哈哈哈','666']
      resolve(data)
    }, 1000)
  })
}

mock.getHistoryLocation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let data = ['理南404', '文新211', '电子楼417']
      resolve(data)
    }, 1000)
  })
}

mock.getAttndList = (url, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      let data = {
        "code": 1000,
        "msg": "",
        "data": {
            "count": 10,
            "attnds": [
                {
                    "attnd_id": 12335,
                    "cipher": "JQS52",
                    "attnd_name": "操作系统",
                    "start_time": 1526393087,
                    "last": 5,
                    "location": {
                        "latitude": 35.4,
                        "longitude": 174.4,
                        "accuracy": 30,
                    },
                    "addr_name": '南亭猫咪主题餐厅',
                    "group_name": '',
                    "teacher_name": "wjx"
                },
                {
                    "attnd_id": 14475,
                    "cipher": "CX6q52",
                    "attnd_name": "计算机网络",
                    "start_time": 1520975105,
                    "last": 5,
                    "location": {
                        "latitude": 36.4,
                        "longitude": 175.4,
                        "accuracy": 30,
                    },
                    "addr_name": '广州大学图书馆副楼',
                    "group_name": '',
                    "teacher_name": "lzp"
                },
                {
                  "attnd_id": 14475,
                  "cipher": "CX6q52",
                  "attnd_name": "计算机网络",
                  "start_time": 1520975105,
                  "last": 5,
                  "location": {
                      "latitude": 36.4,
                      "longitude": 175.4,
                      "accuracy": 30,
                  },
                  "addr_name": '广州大学图书馆副楼',
                  "group_name": '',
                  "teacher_name": "lzp"
                },
                {
                  "attnd_id": 14475,
                  "cipher": "CX6q52",
                  "attnd_name": "计算机网络",
                  "start_time": 1520975105,
                  "last": 5,
                  "location": {
                      "latitude": 36.4,
                      "longitude": 175.4,
                      "accuracy": 30,
                  },
                  "addr_name": '广州大学图书馆副楼',
                  "group_name": '',
                  "teacher_name": "lzp"
                },
            ]
        }
      }
      resolve(data)
    }, 1000)
  })
}

export default mock