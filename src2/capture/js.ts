import { ErrorInfo } from '../types'
/**
 * 处理stack中的信息
 */
export function handlerStack (error: Error):string {
    return ''
}

export function handlerError (type: string, error: Error, message?: string, url?: string, line?: number, column?: number): ErrorInfo {
    
    let result: ErrorInfo
    let errorUrl: string = ''
    let rowInfo: number[] = [0, 0, 0]
    if (error && error.stack) {
        const urlInfo:any = error.stack.match('https?://[^\n]+')[0] || ''
        errorUrl = urlInfo instanceof Array ? urlInfo[0] : urlInfo
        rowInfo = errorUrl.match(':(\\d+):(\\d+)')
    }
    return 
    
}

export function onError() :void {
    window.onerror = function (message, url, line, column, stack) {
        handlerError('onerror', stack, message, url, line, column)
    }
}