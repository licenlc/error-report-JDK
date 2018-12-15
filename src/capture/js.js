import { captureException } from './index'
/**
 * 处理stack中信息
 * @param { Ojbect } stack 
 * @return { String }
 */
export const handlerStack = error => {
  let stack = error.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, "");
  const msg = error.toString();
  if (stack.indexOf(msg) < 0) {
      stack = msg + "@" + stack;
  }
  return stack;
}
/**
 * 
 * 异常信息可能没有lineNo, columnNo字段，需要从stack中获取异常信息
 * eg: Vue中err没有line, column, url, message信息，需要从error.stack中获取
 * promise 中报错也没有
 * 参考： https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror
 * @param { * } error
 * @return { Object }
 */
export const handlerError = (type = '', error, message = '', url = '', line = '', column= '') => {
    let [ errorUrl, rowInfo ] = ['', [0, 0, 0]]
    if (error && error.stack) {
      const urlInfo = error.stack.match('https?://[^\n]+')[0] || ''
      errorUrl = urlInfo instanceof Array ? urlInfo[0] : urlInfo
      rowInfo = errorUrl.match(':(\\d+):(\\d+)')
    }
    return {
      message: encodeURIComponent((message || error.message)),
      url: encodeURIComponent(url || errorUrl),// 待修改
      line: line || rowInfo[1],
      column: column || rowInfo[2],
      stack: encodeURIComponent(error),
      type: type
    }
}

/**
 * window.onerror
 * 用来捕获js异常信息,无法捕获资源加载类异常
 */
export function onError () {
  window.onerror = (message, url, line, column, stack) => {
    captureException('js', handlerError('onerror', stack, message, url, line, column))
  }
}

/**
 * promise 异常信息捕获,
 * promise的stack 在e.reason.stack
 * 也可能是 undefined
 */
const handlerPormiseReject = error => {
  captureException('js', handlerError('unhandledrejection', error.reason, error.reason.message))
}

export const onPromiseReject = () => {
  window.addEventListener && window.addEventListener('unhandledrejection', handlerPormiseReject)
}

export const offPromiseReject = () => {
  window.removeEventListener && window.removeEventListener('unhandledrejection', handlerPormiseReject)
}


