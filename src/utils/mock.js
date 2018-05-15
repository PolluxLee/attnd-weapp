const mock = {}

mock.post = (url, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      console.log(data)
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
            "name": "lzp",
            "remark": {},
            "status": 0
        }
      }
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
                        "accuracy": 30
                    },
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
                        "accuracy": 30
                    },
                    "teacher_name": "lzp"
                }
            ]
        }
      }
      resolve(data)
    }, 1000)
  })
}

export default mock