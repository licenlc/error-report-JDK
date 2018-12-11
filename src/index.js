import { DEFAULT_CONFIG } from './config'
import { isObj, isWindow, extend } from './utils'
import { handlerError, captureException, netWork } from './capture/JSError'

let flag = false

class ErrorCatch {
  static setConfig(config) {
    if (flag) {
      console.log('已经初始化了')
      return this
    }
    if (!isWindow || !isObj(config) || !config.reportUrl || config.project) {
      return
    }
    netWork.init().setConfig(extend(DEFAULT_CONFIG, config))
    flag = true
    return this
  }

  static report (type = 'Vue', error) {
    captureException(handlerError(type, error, error.message))
  }
}
export default ErrorCatch


