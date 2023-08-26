/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
    Request,
    Response,
    ResponseMessage,
} from '../types';

import { default as HTTP } from './status-codes-object';


export function send200Ok (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.OK! ] as string
) {
    return sendJSONResponse( res, HTTP.OK as number, msg );
}

export function send201Created (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.CREATED! ] as string
) {
    return sendJSONResponse( res, HTTP.CREATED as number, msg );
}

export function send204NoContent (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.NO_CONTENT! ] as string
) {
    return sendJSONResponse( res, HTTP.NO_CONTENT as number, msg );
}

export function send400BadRequest (
    res: Response,
    msg: ResponseMessage = 'BAD_REQUEST (invalid syntax)'
) {
    return sendJSONResponse( res, HTTP.BAD_REQUEST as number, msg );
}

export function send401UnAuthorized (
    res: Response,
    msg: ResponseMessage = 'UnAuthorized'
) {
    return sendJSONResponse( res, HTTP.UNAUTHORIZED as number, msg );
}

export function send404NotFound (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.NOT_FOUND! ] as string
) {
    return sendJSONResponse( res, HTTP.NOT_FOUND as number, msg );
}

// Метод запроса не разрешен к использованию для данного URL
export function send405MethodNotAllowed (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.METHOD_NOT_ALLOWED! ] as string
) {
    return sendJSONResponse( res, HTTP.METHOD_NOT_ALLOWED as number, msg );
}

export function send409Conflict (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.CONFLICT! ] as string
) {
    return sendJSONResponse( res, HTTP.CONFLICT as number, msg );
}

export function send500ServerError (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.INTERNAL_SERVER_ERROR! ] as string
) {
    return sendJSONResponse( res, HTTP.INTERNAL_SERVER_ERROR as number, msg );
}

export function send503ServiceUnavailable (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.SERVICE_UNAVAILABLE! ] as string
) {
    return sendJSONResponse( res, HTTP.SERVICE_UNAVAILABLE as number, msg );
}


export const callbackError400 = (
    req: Request,
    res: Response
) => send400BadRequest( res, 'default callback http.400');

export const callbackError405 = (
    req: Request,
    res: Response
) => send405MethodNotAllowed( res, 'default callback http.405');


/**
 * Send content as 'object' ONLY.
 * * res Express response object
 * * status - HTTP Status Code
 * * content - String or Object for transmition to client
 */
export function sendJSONResponse (
    res: Response,
    status: number,
    content: ResponseMessage = 'response is undefined'
) {
    const response = ( typeof content === 'object') ?
        content
        : { 'message': content };
    return res.status( status ).json( response );
}

// export default ExpressResponses;
//     sendJSONResponse,
//     send200Ok,
//     send201Created,
//     send204NoContent,
//     send400BadRequest,
//     send401UnAuthorized,
//     send404NotFound,
//     send405MethodNotAllowed,
//     send409Conflict,
//     send500ServerError,
//     send503ServiceUnavailable,
//     callbackError400,
//     callbackError405
