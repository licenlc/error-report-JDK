/**
 * 默认配置信息
 */
export const DEFAULT_CONFIG = {
  // 接口上报地址
  reportUrl : '',
  // 抽样 0-1
  random: 1,
  date: '2018-12-01',
  // 对应工程
  project: 'agent',
  // 重复上报的次数
  /**
   * 同一个页面相同错误上报错误次数
   */
  repeat: 5,
  /**
   * 文件是否压缩，使用sourmap 1:表示使用sourcemap 0: 不是用sourcemap
   * 
   * */ 
  m: 0,
  // 上报使用的方式，ajax 或者 img.src方式 {img, ajax}
  // type: 'img',
  // 错误级别 1-debug 2-info 4-error
  level: 4,
  // 忽略某个错误, 支持 Regexp 和 Function
  // ignore: [/Script error/gi],
  ignore: [],
  // 延迟上报时间
  delay: 1000,
  logArr: 30
}