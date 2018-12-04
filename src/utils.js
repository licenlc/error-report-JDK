export const isWindow = typeof window !== 'undefined'

export const isError = (value) => {
  switch (Object.prototype.toString.call(value)) {
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

export const isDOMError = (value) => Object.prototype.toString.call(value) === '[object DOMException]'

export const isException = (value) => Object.prototype.toString.call(value) === '[object Exception]'

export const isObj = (value) => typeof value === 'object' && !!value
/*将json对象转成地址栏参数*/
export const toQueryString = (obj) => {
  var ret = []
  function toQueryPair(key, value) {
      if (typeof value == 'undefined'){
          return key
      }
      return key + '=' + (value === null ? '' : String(value))
  }
  for(var key in obj){
      var values = obj[key]
      if(values && values.constructor == Array){//数组
          var queryValues = []
          for (var i = 0, len = values.length, value; i < len; i++) {
              value = values[i]
              queryValues.push(toQueryPair(key, value))
          }
          ret = ret.concat(queryValues)
      }else{ //字符串
          ret.push(toQueryPair(key, values))
      }
  }
  return ret.join('&')
}
