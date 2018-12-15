import { ReportConfig } from './types'

// 默认配置
export const DEFAULT_CONFIG: ReportConfig = {
  reportUrl : '',
  jsErrorRandom: 1,
  resourceRandom: 1,
  perfomanceRandom: 0.1,
  date: '2018-12-01',
  project: 'agent',
  repeat: 5,
  sourcemap: 0,
  level: 4,
  // ignore: [/Script error/gi],
  delay: 1000
}