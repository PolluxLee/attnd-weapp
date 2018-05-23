const zlog = {}

zlog.log = function(data, loc) {
  if (!loc) {
    console.log(data)
    return
  }
  console.log(loc, data)
}

zlog.warn = function(data, loc) {
  if (!loc) {
    console.warn(data)
    return
  }
  console.warn(loc, data)
}

zlog.error = function(data, loc) {
  if (!loc) {
    console.error(data)
    return
  }
  console.error(loc, data)
}

export default zlog