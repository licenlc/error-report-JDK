import { captureException } from './index'

/**
 * @param {Event} event
 */
const resourErrorFun = (event) => {
  if (event) {
    const target = event.target || event.srcElement
    const isElement = target instanceof HTMLElement
    if (!isElement) {
      return
    }
    captureException('resource', {})
  }
}

/**
 * 资源加载类错误捕获，js，img，css
 */
export function onResourceError () {
  window.addEventListener('error', resourErrorFun, true)
}

export function offResourceError () {
  window.removeEventListener('error', resourErrorFun)
}