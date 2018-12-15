// 配置文件接口声明
export interface ReportConfig {
  // 接口上报地址
  reportUrl: string,
  // js报错上报比例
  jsErrorRandom?: number,
  // 资源加载失败上报比例
  resourceRandom?: number,
  // 性能上报的比例, 暂时没有使用，待开发
  perfomanceRandom?: number,
  // 时间，必传
  date: string,
  // 对应工程, 必传，方便后端系统统计
  project: string,
  // 同一个页面相同错误上报错误次数,SPA也是一样
  repeat?: number,
  // 文件是否压缩，启用sourcemap;1:表示使用sourcemap 0: 不是用sourcemap
  sourcemap?: number,
  // 错误级别 1-debug 2-info 4-error
  level?: number,
  // 忽略某个错误, 支持 Regexp 和 Function， 目前只过滤js报错
  igonore?: RegExp[],
  // 延迟上报时间
  delay?: number
}

// 报错信息接口声明
export interface ErrorInfo {
  // 报错的信息
  message: string,
  // 报错的js路径
  url: string,
  // 报错的行数
  line: number,
  // 报错的列数
  column: number,
  stack: Error,
  // 报错的类型
  type: string
}