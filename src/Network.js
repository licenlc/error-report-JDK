import { getBroswerInfo, getOS } from './system'
import { repeatTime } from './Capture'
import { toQueryString, extend } from './utils'
import { onPromiseReject, onError, offPromiseReject } from './Capture'

export class NetWork {
  constructor (config = {}) {
    this.config = config
    this.type = config.type || ''
    this.reportUrl = config.reportUrl || ''
  }

  init () {
    onPromiseReject()
    onError()
    return this
  }

  destory () {
    offPromiseReject()
  }

  setConfig (config) {
    console.log('config:', JSON.stringify(config))
    this.config = config
    this.type = config.type
    this.reportUrl = config.reportUrl
    console.log('this.reportUrl:', this.reportUrl)
  }

  report (error) {
    // 是否大于重复上报的次数限制
    if (repeatTime(error) > this.config.repeatTime) {
      return
    }
    const info = extend({}, {map: true}, getBroswerInfo(), getOS(), { href: encodeURIComponent(window.location.href) }, error)
    console.log('上报路径：', `${this.reportUrl}?${toQueryString(info)}`)
    new Image().src= `${this.reportUrl}?${toQueryString(info)}`
  }
}
