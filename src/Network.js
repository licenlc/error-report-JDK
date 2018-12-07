import { getUserAgent, getOS } from './system'
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
  }

  report (error) {
    // 是否大于重复上报的次数限制
    if (repeatTime(error) > this.config.repeatTime) {
      return
    }
    const info = extend({}, {m: this.config.map}, getUserAgent(), getOS(), { location: encodeURIComponent(window.location.href) }, {date: this.config.data}, error)
    // for (let key in info) {
    //   if (['message', 'href', 'stack', 'url', 'error'].indexOf(key) > -1) {
    //     console.log(`key:${key}== ${decodeURIComponent(info[key])}`)
    //   } else {
    //     console.log(`key:${key}== ${info[key]}`)
    //   }
    // }  
    // console.log('上报路径：', `${this.reportUrl}?${toQueryString(info)}`)
    new Image().src= `${this.reportUrl}?${toQueryString(info)}`
  }
}
