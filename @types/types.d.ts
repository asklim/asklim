import type { LoggingMethod } from 'loglevel';
import type { Request, Response } from 'express';
type DateTypes = number | string | Date | undefined;
interface TItem {
    gid: string;
    name: string;
    gr: string;
    qpu: number;
    from: string;
    frAct: number;
    fqL: number;
    fqA: number;
    fqM: number;
    valid: number;
}
interface WorkDateOption {
    delta?: number;
}
type WorkDateFunction = (offset?: number, baseDay?: DateTypes) => string | undefined;
type ResponseMessage = object | string;
interface IConsoleLogger {
    trace: LoggingMethod;
    debug: LoggingMethod;
    info: LoggingMethod;
    warn: LoggingMethod;
    error: LoggingMethod;
}
export type { DateTypes, TItem, WorkDateOption, WorkDateFunction, ResponseMessage, LoggingMethod, Request, Response, IConsoleLogger, };
//# sourceMappingURL=types.d.ts.map