/**
 * 处理stack中信息
 * 
 * @param {Ojbect} stack 
 */
export const handlerStack = (stack) => {
}
/**
 * 添加系统信息
 * @param {Object} error
 */
function addSystemInfo (error) {
  let href = { href: window.location.href }
  return Object.assign({}, href, error)
}

/**
 *异常信息可能没有lineNo, columnNo字段，需要从stack中获取异常信息
 * eg: Vue中err没有line, column, url, message信息，需要从error.stack中获取
 * promise 中报错也没有
 * 参考：
 *  https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror
 * @param {*} error
 * 
 * 
 */
export const handlerError = (type = '', error, message = '', url = '', line = '', column= '') => {
  if (error.stack) {
    const urlInfo = error.stack.match('https?://[^\n]+')[0] || ''
    let errorUrl = urlInfo ? urlInfo[0] : ''
    let rowInfo = errorUrl.match(':(\\d+):(\\d+)')
    if (!rowInfo) {
      rowInfo = [0, 0, 0]
    }
  }

  return {
    message: message || error.stack,
    url: url || errorUrl,// 待修改
    line: line || rowInfo[1],
    column: column || rowInfo[2],
    stack: error,
    type: type
  }
}
/**
 * window.onerror
 */
export function onError () {
  window.onerror = (message, url, line, column, stack) => {
    captureException(handlerError('onerror', stack, message, url, line, column))
  }
}

/**
 * promise 异常信息捕获,
 * promise的stack 在e.reason.stack
 * 也可能是 undefined
 */
const handlerPormiseReject = (error) => {
  captureException(handlerError('unhandledrejection', error.reason))
}

export const onPromiseReject = () => {
  window.addEventListener && window.addEventListener('unhandledrejection', handlerPormiseReject)
}

export const offPromiseReject = () => {
  window.removeEventListener('unhandledrejection', handlerPormiseReject)
}
/**
 * 判断是否大于最大重复次数
 */
let logMap = {}
export const repeatTime = (info) => {
  let key = `${info.message}&&${window.location.href}`
  logMap[key] = (parseInt(logMap[key], 10) || 0) + 1
  return logMap[key]
}
/**
 * 
 */
let logArr = []
export const captureException = (info = {}) => {
  let flag = false
  for (let i  = 0 ; i < logArr.length ; i++) {
    let log = logArr[i]
    if (info.message === log.message && 
      info.url === log.url && 
      info.column === log.column && 
      info.line === log.line) 
    {
      flag = true
      return
    }
  }
  if (flag) {
    return
  }
  info = addSystemInfo(info)
  if (logArr.length > 20) {
    logArr.shift()
  } else {
    logArr.push(info)
  }
  return info
}
