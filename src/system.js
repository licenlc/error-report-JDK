/**
 * 收集浏览器信息
 * (目前只支持在微信和支付宝，业务限制)，屏幕分辨率，系统版本
 */
const isAlipayReg = /AlipayClient/i
const weChatReg = /MicroMessenger/i
const UCReg = /UCBrowser/i
const QQReg = /MQQBrowser/i
const navigatorInfo = window.navigator
const userAgent = navigatorInfo.userAgent
const platform = navigatorInfo.platform
// 顺序不要动，是个不断测试的活(╥╯^╰╥) 目前只是测试了iphone手机，改了返回的浏览器版本会不对
// 手机qq浏览器
const QQVersionReg = /MQQBrowser.*?([\d.]+)/i
let QQVersion = userAgent.match(QQVersionReg)
const reg = /(UCBrowser|AlipayClient|MicroMessenger|firefox|chrome|version).*?([\d.]+)/i
let info = userAgent.match(reg)

 export function getBroswerInfo () {
   if (!QQVersion) {
    return {
      userAgent2: QQVersion[1].replace('/version/i', 'safari'),
      version: QQVersion[2]
    }
   } else {
     return {
       userAgent2: info[1].replace('/version/i', 'safari'),
       version: info[2]
     }
   }
 }
 /**
  * 获取浏览器信息,目前只支持微信和支付宝内置浏览器(业务需求)
  */
 export const getUserAgent = () => {
   return { userAgent: userAgent, platform: platform}
 }

 /**
  * 获取页面路径
  */
 export const getHref = () => {
   return { href : window.location.href }
 }