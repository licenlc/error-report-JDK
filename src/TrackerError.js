import { onPromiseReject, onError, offPromiseReject } from './Capture'

export class TrackerError {

  constructor () {
    this.install()
  }

  install () {
    onPromiseReject()
    onError()
  }
  
  uninstall () {
    offPromiseReject()
  }
}