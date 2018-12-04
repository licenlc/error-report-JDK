import {onPromiseReject, onError, offPromiseReject } from './Capture'
import NetWork from './Network'

export class ErrorTracker {
  constructor (config = {}) {
    this.config = config
    this.netWork = null
    this.install()
  }

  install () {
    this.netWork = new NetWork(this.config)
    onPromiseReject()
    onError()
  }
  
  uninstall () {
    offPromiseReject()
  }

  report () {
    this.netWork.report(error)
  }
}