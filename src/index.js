import { DEFAULT_CONFIG } from './config'
import { isObj, isWindow, extend } from './utils'
import { handlerError, captureException, netWork } from './Capture'

let flag = false

class ErrorCatch {
  static setConfig(config) {
    if (flag) {
      console.log('已经初始化了')
      return this
    }
    if (!isWindow || !isObj(config) || !config.reportUrl) {
      return
    }
    netWork.init().setConfig(extend(DEFAULT_CONFIG, config))
    flag = true
    return this
  }

  static report (type = 'Vue', error) {
    captureException(handlerError(type, error))
  }
}

export default ErrorCatch


