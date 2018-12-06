export const isWindow = typeof window !== 'undefined'

let objToString = Object.prototype.toString

export const isError = (value) => {
  switch (objToString.call(value)) {
    case '[object Error]':
      return true
    case '[object Exception]':
      return true
    case '[object DOMException]':
      return true
    default:
      return value instanceof Error
  }
}

export const isDOMError = (value) => objToString.call(value) === '[object DOMException]'

export const isException = (value) => objToString.call(value) === '[object Exception]'

export const isObj = (value) => typeof value === 'object' && !!value

export const extend = (target = {}, ...source) => {
  for (let i = 1; i < source.length ; i++) {
    for (const key in source[i]) {
      target[key] = source[i][key]
    }
  }
  return target
}
/**
 * 将json对象转成地址栏参数
 * params { Object } obj
 * return { String }
 * */
export const toQueryString = (obj = {}) => {
  if (isObj(obj)) {
    let ret = []
    for(const key in obj) {
      let value = obj[key]
      ret.push(`${key}=${value}`)
    }
    return ret.join('&')
  }
  return ''
}
