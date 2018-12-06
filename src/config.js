/**
 * 默认配置信息
 */
export const DEFAULT_CONFIG = {
  // 接口上报地址
  reportUrl : '',
  // 抽样 0-1
  random: 1,
  // 重复上报的次数
  repeat: 5,
  // 文件是否压缩，使用sourmap
  sourcemap: true,
  // 上报使用的方式，ajax 或者 img.src方式 {img, ajax}
  // type: 'img',
  // 错误级别 1-debug 2-info 4-error
  level: 4,
  // 忽略某个错误, 支持 Regexp 和 Function
  ignore: [],
  // 延迟上报时间
  delay: 1000,
  logArr: 30
}