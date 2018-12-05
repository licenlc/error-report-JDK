/**
 * 收集浏览器信息
 * (目前只支持在微信和支付宝，业务限制)，屏幕分辨率，系统版本
 */
 const isAlipayReg = /AlipayClient/i
 const weChatReg = /MicroMessenger/i
 const userAgent = window.navigator.userAgent
 /**
  * 获取浏览器信息,目前只支持微信和支付宝内置浏览器(业务需求)
  */
 export const getUserAgent = () => {
  if (isAlipayReg.test(userAgent)) {
    return { userAgent: 'alipay' }
  } else if (weChatReg.test(userAgent)) {
    return { userAgent: 'weChart' }
  } else {
    return { userAgent: 'others' }
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