import { ReportConfig } from './types'

export class NetWork {
    config: ReportConfig

    constructor (config: ReportConfig) {
        this.config = config
    }

    init(): void {
    }

    setConfig (config: ReportConfig): void {
        this.config = config
    }

    getConfig (): ReportConfig {
        return this.config
    }

    reprot (value: string): void {
        new Image().src = `${this.config.reportUrl}?${value}`
    }
}