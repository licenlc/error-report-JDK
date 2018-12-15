let list = []

export function ajaxFunc () {
    const request = window.XMLHttpRequest
    let open = window.XMLHttpRequest.open
    let send = window.XMLHttpRequest.send
    window.XMLHttpRequest.prototype.open = function () {
        let args = [].slice.call(arguments)
        const method = args[0]
        const url = args[1]
        console.log('method:', method, 'url:', url)
        // const _readstatechange = this.onreadstatechange || function () {}

        // let onreadstatechange = () => {
        //     debugger
        //     let item = {}
        //     if(this.readyState > 1) {
        //         console.log(this.status)
        //     }
        //     if (this.readyState === 0) {
        //         if (!item.startTime) {
        //             item.startTime = (+new Date())
        //         }
        //     } else if (this.readyState === 1) {
        //         if (!item.startTime) {
        //             item.startTime = (+new Date())
        //         }
        //     } else if (this.readyState === 2) {
        //         item.header = {}
        //         const header = this.getAllResponseHeaders() || ''
        //         console.log(header)
        //         const headerArr = header.split('\n')

        //     }
        //     return _readstatechange.apply(this, arguments)
        // }
        // this.onreadstatechange = onreadstatechange

        // return open.apply(this, args)
    }
}