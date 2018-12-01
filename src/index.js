import { DEFAULT_CONFIG } from './config'
import TrackerError from './TrackerError'
import { isObj, isWindow} from './utils'

function init(config = {}) {
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
  config = Object.assign(DEFAULT_CONFIG, config)
  new TrackerError(config).install()
}
