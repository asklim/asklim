import { LogLevelDesc } from 'loglevel';
import { IConsoleLogger } from '../types';
export default class Logger implements IConsoleLogger {
    static setLevel(isProduction: boolean): void;
    static setLogLevel(level: LogLevelDesc): void;
    private _ticker;
    constructor(ticker?: string);
    private logPrefix;
    private debugPrefix;
    debug: (...args: unknown[]) => void;
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    trace: (...args: unknown[]) => void;
}
//# sourceMappingURL=logger-class.d.ts.map