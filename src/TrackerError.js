import { install, uninstall } from './Capture'
import NetWork from './Network'

export class ErrorTracker {
  constructor (config = {}) {
    this.config = config
    this.netWork = null
    this.install()
  }

  install () {
    this.netWork = new NetWork(this.config)
    install()
  }
  
  uninstall () {
    uninstall()
  }

  report (errpr) {
    this.netWork.report(error)
  }
}