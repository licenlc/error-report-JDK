// 默认配置信息
export const DEFAULT_CONFIG = {
  // 接口上报地址
  reportUrl : '',
  // 抽样 js-error:0-1  js报错上报的比例
  jsErrorRandom: 1,
  // 资源上报的错误比例
  resourceRandom: 1,
  // 性能上报的比例
  perfomanceRandom: 0.1,
  date: '2018-12-01',
  // 对应工程, 必传，方便后端系统统计
  project: 'agent',
  // 同一个页面相同错误上报错误次数
  repeat: 5,
  // 文件是否压缩，使用sourmap 1:表示使用sourcemap 0: 不是用sourcemap
  sourcemap: 0,
  // 错误级别 1-debug 2-info 4-error
  level: 4,
  // 忽略某个错误, 支持 Regexp 和 Function， 目前只过滤js报错
  ignore: [/Script error/gi],
  // 延迟上报时间
  delay: 1000
}