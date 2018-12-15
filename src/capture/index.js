import { onPromiseReject, onError, offPromiseReject } from './js'
import { onResourceError, offResourceError } from './resource'
import NetWork from '../NetWork'
// import { ajaxFunc } from './ajax'


let work = new NetWork()

export const netWork = work

const HANDLER_ERROR_ARR = {
  js: handlerJS,
  resource: handlerResource,
  performance: handlerPerformance
}

export const install = () => {
  onError()
  // ajaxFunc()
  onPromiseReject()
  onResourceError()
}

export const uninstall = () => {
  offPromiseReject()
  offResourceError()
}

export const captureException = (type, info = {}) => {
  HANDLER_ERROR_ARR[type](info)
}
/**
 * 判断js发送错误次数是否大于最大重复上报错误次数
 * @params { Object } info
 * @praram { Boolean } flag
 */
let logMap = {}
const repeatTime = (info, flag = false) => {
  let key = `${info.message}&&${window.location.href}`
  if (flag && parseInt(logMap[key]) < work.config.repeat) {
    logMap[key] = (parseInt(logMap[key], 10) || 0) + 1
  }
  return parseInt(logMap[key])
}


let logArr = []
function handlerJS (info) {
  // 上报错误的比例
  if (Math.random() > work.config.jsErrorRandom) {
    return
  }
  if (!info.message) {
    return
  }
  repeatTime(info, true)

  for (let i  = 0 ; i < logArr.length ; i++) {
    let log = logArr[i]
    if (!(info.message === log.message && info.url === log.url && info.column === log.column && info.line === log.line)) {
      logArr.push(info)
    }
  }
  
  if (logArr.length > 30) {
    logArr.shift()
  }
  work.report(info)
}

function handlerResource () {

}

function handlerPerformance () {

}

