import { install, uninstall } from './capture/index'

export default class NetWork {
  constructor (config = {}) {
    this.config = config
    this.type = config.type || ''
    this.reportUrl = config.reportUrl || ''
  }

  init () {
    install()
    return this
  }

  destory () {
    uninstall()
  }

  setConfig (config) {
    console.log('合并后的config:', JSON.stringify(config))
    this.config = config
    this.type = config.type
    this.reportUrl = config.reportUrl
  }

  getConfig () {
    return this.config
  }

  report (value) {
    // 是否大于重复上报的次数限制
    // if (repeatTime(error) > this.config.repeatTime) {
    //   return
    // }
    // let config = { m: this.config.map, date: this.config.date, project: this.config.project }
    // const info = extend({}, config, getUserAgent(), { location: encodeURIComponent(window.location.href) }, error)
    // for (let key in info) {
    //   if (['message', 'href', 'stack', 'url', 'error'].indexOf(key) > -1) {
    //     console.log(`key:${key}== ${decodeURIComponent(info[key])}`)
    //   } else {
    //     console.log(`key:${key}== ${info[key]}`)
    //   }
    // }  
    // console.log('上报路径：', `${this.reportUrl}?${toQueryString(info)}`)
    new Image().src= `${this.reportUrl}?${value}`
  }
}
