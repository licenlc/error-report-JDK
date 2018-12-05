import { DEFAULT_CONFIG } from './config'
import { TrackerError } from './TrackerError'
import { isObj, isWindow, extend } from './utils'
import { NetWork } from './Network'
import { handlerError, captureException } from './Capture'

let tracker
let netWork

export class ErrorCatch {
  constructor (config = DEFAULT_CONFIG) {
    this.config = extend({}, DEFAULT_CONFIG, config)
  }

  static init(config) {
    // 判断是否在浏览器环境
    if (!isWindow) {
      return
    }
    if (!isObj(config)) {
      console.error('config is not a object')
      return
    } else if (!config.reportUrl) {
      console.error('reportUrl is null')
      return
    }
    config = extend(DEFAULT_CONFIG, config)

    if (!tracker) {
      tracker = new TrackerError()
    }
    if (!netWork) {
      netWork = new NetWork(config)
    }
  }

  report (type = 'Vue', error) {
    netWork.report(captureException(handlerError(type, error)))
  }
}
