/**
 * 收集浏览器信息
 * (目前只支持在微信和支付宝，业务限制)，屏幕分辨率，系统版本
 */
const isAlipayReg = /AlipayClient/i
const weChatReg = /MicroMessenger/i
const UCReg = /UCBrowser/i
const QQReg = /MQQBrowser/i
const userAgent = window.navigator.userAgent
const reg = /(UCBrowser|MQQBrowser|AlipayClient|MicroMessenger|firefox|version).*?([\d.]+)/i
let info = userAgent.match(reg)

 export function getBroswerInfo () {
   return {
     userAgent: info[1].replace('/version/i', 'safari'),
     version: info[2]
   }
 }
 /**
  * 获取浏览器信息,目前只支持微信和支付宝内置浏览器(业务需求)
  */
 export const getUserAgent = () => {
  if (isAlipayReg.test(userAgent)) {
    return { userAgent: 'alipay' }
  } else if (weChatReg.test(userAgent)) {
    return { userAgent: 'weChart' }
  } else {
    return { userAgent: userAgent }
  }
 }
 /**
  * 获取操作系统信息
  */
 export const getOS = () => {
  if(/(iPhone|iPad|iPod|iOS)/i.test(userAgent)){
		return { os: 'IOS' }
	} else if(/Android/i.test(userAgent)){
		return { os: 'Android' }
	}
 }