import { Response, Request } from 'express';

import HTTP from './http-response-codes';
import { ResponseMessage, } from '../types';

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
    const response = ( typeof content == 'object' ) ?
        content
        : { 'message': content };
    return res.status( status ).json( response );
}


export function send200Ok (
    res: Response,
    ctx = HTTP[ HTTP.OK ]
) {
    return sendJSONResponse( res, HTTP.OK, ctx );
}

export function send201Created (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.CREATED ]
) {
    return sendJSONResponse( res, HTTP.CREATED, msg );
}

export function send204NoContent (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.NO_CONTENT ]
) {
    return sendJSONResponse( res, HTTP.NO_CONTENT, msg );
}

export function send400BadRequest (
    res: Response,
    msg: ResponseMessage = 'BAD_REQUEST (invalid syntax)'
) {
    return sendJSONResponse( res, HTTP.BAD_REQUEST, msg );
}

export function send401UnAuthorized (
    res: Response,
    msg: ResponseMessage = 'UnAuthorized'
) {
    return sendJSONResponse( res, HTTP.UNAUTHORIZED, msg );
}

export function send404NotFound (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.NOT_FOUND ]
) {
    return sendJSONResponse( res, HTTP.NOT_FOUND, msg );
}

// Метод запроса не разрешен к использованию для данного URL
export function send405MethodNotAllowed (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.METHOD_NOT_ALLOWED ]
) {
    return sendJSONResponse( res, HTTP.METHOD_NOT_ALLOWED, msg );
}

export function send409Conflict (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.CONFLICT ]
) {
    return sendJSONResponse( res, HTTP.CONFLICT, msg );
}

export function send500ServerError (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.INTERNAL_SERVER_ERROR ]
) {
    return sendJSONResponse( res, HTTP.INTERNAL_SERVER_ERROR, msg );
}

export function send503ServiceUnavailable (
    res: Response,
    msg: ResponseMessage = HTTP[ HTTP.SERVICE_UNAVAILABLE ]
) {
    return sendJSONResponse( res, HTTP.SERVICE_UNAVAILABLE, msg );
}


export const callbackError400 = (
    req: Request,
    res: Response
) => send400BadRequest( res, 'default callback http.400' );

export const callbackError405 = (
    req: Request,
    res: Response
) => send405MethodNotAllowed( res, 'default callback http.405' );
