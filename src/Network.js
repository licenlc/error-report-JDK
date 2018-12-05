import { getUserAgent, getOS } from './system'

export class NetWork {
  constructor (config) {
    this.config = config
    this.type = config.type
    this.reportUrl = config.reportUrl
  }

  report (error) {
    // 是否大于重复上报的次数限制
    if (repeatTime(error) > this.config.repeatTime) {
      return
    }
    const info = Object.assign({}, {map: this.config.sourcemap}, getUserAgent(), getOS())
    new Image().src= `${this.reportUrl}?${toQueryString(info)}`
  }
}
