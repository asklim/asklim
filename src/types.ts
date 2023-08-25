import type { LoggingMethod } from 'loglevel';
import type { Request, Response } from 'express';

type DateTypes = number | string | Date | undefined;

interface TItem {
    gid : string,
    name : string,
    gr : string,
    qpu : number,
    from : string,
    frAct : number,
    fqL : number,
    fqA : number,
    fqM : number,
    valid : number,
}

// export interface IWorkDate {
//     week,
//     toISODay,
//     today,
//     msFromMidnight,
//     mappedUnixTime,
//     theMappedDeltaDate,
// }

interface WorkDateOption {
    delta?: number,
}

type WorkDateFunction = (
    // eslint-disable-next-line no-unused-vars
    offset?: number, baseDay?: DateTypes
) => string | undefined;


type ResponseMessage = object | string;

interface IConsoleLogger {
    trace: LoggingMethod; // 0
    debug: LoggingMethod; // 1
    info: LoggingMethod;  // 2
    warn: LoggingMethod;  // 3
    error: LoggingMethod; // 4
}

export type {
    DateTypes,
    TItem,
    WorkDateOption,
    WorkDateFunction,
    ResponseMessage,
    LoggingMethod,
    Request,
    Response,
    IConsoleLogger,
};
