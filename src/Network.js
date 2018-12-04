export class Net {
  constructor (config) {
    this.config = config
    this.type = config.type
    this.reportUrl = config.reportUrl
  }

  report (error) {
    if (this.type === 'img') {
      new Image().src= `${this.reportUrl}?${toQueryString(error)}`
    } else if (this.type === 'ajax') {
      // 待完善
    }
  }
}