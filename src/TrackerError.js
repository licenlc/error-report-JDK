import {onPromiseReject, onError, offPromiseReject } from './Capture'

export class ErrorTracker {
  constructor (config = {}) {
    this.config = config
  }

  install () {
    onPromiseReject()
    onError()
  }
  
  unstall () {
    offPromiseReject()
  }
}