export const isWindow : boolean = typeof window !== 'undefined'

/**
 * 判断是否是对象
 * @params { any }
 */
export function isObj(value: any): boolean {
    return typeof value === 'object' && !!value
}

/**
 * 对象合并
 * 
 * @param target 
 * @param source 
 */
export function extend(target:object, source: any[]): object{
  for (let i = 0; i< source.length; i++) {
    for (let key in source[i]) {
      target[key] = source[i][key]
    }
  }
  return target
}

/**
 * 
 * @param { Object }
 * 
 * @return { String } 
 */
export function toQueryString(obj: any): string {
  if (isObj(obj)) {
    let result: string[] = []
    for (let key in obj) {
      result.push(`${key}=${obj[key]}`)
    }
    return result.join('&')
  }
  return ''
}

/**
 * 捕获异常信息
 * 
 * @param info 
 */
export function captureException(info: any): void {

}