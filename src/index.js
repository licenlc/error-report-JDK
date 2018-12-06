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
    let extendConf = extend(DEFAULT_CONFIG, config)
    ErrorCatch.config = config
    netWork.init().setConfig(extendConf)
    flag = true
    return this
  }

  static report (type = 'Vue', error) {
    captureException(handlerError(type, error))
  }
}
ErrorCatch.config = DEFAULT_CONFIG

export default ErrorCatch


