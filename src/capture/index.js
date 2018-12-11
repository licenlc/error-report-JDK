import { onPromiseReject, onError, offPromiseReject } from 'captureJSError'
import { resourceError, offResourceError } from 'captureResource'
import NetWork from '../NetWork'

let work = new NetWork()

export const netWork = work

/**
 * 判断是否大于最大重复次数
 */
let logMap = {}
export const repeatTime = (info, flag = false) => {
  let key = `${info.message}&&${window.location.href}`
  if (flag && parseInt(logMap[key]) < netWork.config.repeat) {
    logMap[key] = (parseInt(logMap[key], 10) || 0) + 1
  }
  return parseInt(logMap[key])
}

let logArr = []

export const captureException = (info = {}) => {
  if (!info.message) {
    return
  }
  for (let i  = 0 ; i < logArr.length ; i++) {
    let log = logArr[i]
    if (!(info.message === log.message && info.url === log.url && info.column === log.column && info.line === log.line)) {
      logArr.push(info)
    }
  }
  repeatTime(info, true)
  if (logArr.length > 30) {
    logArr.shift()
  }
  work.report(info)
}

export const install = () => {
    onError()
    onPromiseReject()
    resourceError()
}

export const uninstall = () => {
    offPromiseReject()
    offResourceError()
}