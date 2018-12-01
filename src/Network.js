export class Net {
  constructor (config, error) {
    this.config = config
    this.type = config.type
    this.reportUrl = config.reportUrl
    this.error = error
  }

  init () {
    if (this.type === 'img') {
      new Image().src= `${this.reportUrl}?${toQueryString(errorLog)}`
    } else if (this.type === 'ajax') {
      // 待完善
    }
  }
}