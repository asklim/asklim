"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJSONResponse = exports.callbackError405 = exports.callbackError400 = exports.send503ServiceUnavailable = exports.send500ServerError = exports.send409Conflict = exports.send405MethodNotAllowed = exports.send404NotFound = exports.send401UnAuthorized = exports.send400BadRequest = exports.send204NoContent = exports.send201Created = exports.send200Ok = void 0;
const http_response_codes_1 = __importDefault(require("./http-response-codes"));
function send200Ok(res, msg = http_response_codes_1.default[http_response_codes_1.default.OK]) {
    return sendJSONResponse(res, http_response_codes_1.default.OK, msg);
}
exports.send200Ok = send200Ok;
function send201Created(res, msg = http_response_codes_1.default[http_response_codes_1.default.CREATED]) {
    return sendJSONResponse(res, http_response_codes_1.default.CREATED, msg);
}
exports.send201Created = send201Created;
function send204NoContent(res, msg = http_response_codes_1.default[http_response_codes_1.default.NO_CONTENT]) {
    return sendJSONResponse(res, http_response_codes_1.default.NO_CONTENT, msg);
}
exports.send204NoContent = send204NoContent;
function send400BadRequest(res, msg = 'BAD_REQUEST (invalid syntax)') {
    return sendJSONResponse(res, http_response_codes_1.default.BAD_REQUEST, msg);
}
exports.send400BadRequest = send400BadRequest;
function send401UnAuthorized(res, msg = 'UnAuthorized') {
    return sendJSONResponse(res, http_response_codes_1.default.UNAUTHORIZED, msg);
}
exports.send401UnAuthorized = send401UnAuthorized;
function send404NotFound(res, msg = http_response_codes_1.default[http_response_codes_1.default.NOT_FOUND]) {
    return sendJSONResponse(res, http_response_codes_1.default.NOT_FOUND, msg);
}
exports.send404NotFound = send404NotFound;
// Метод запроса не разрешен к использованию для данного URL
function send405MethodNotAllowed(res, msg = http_response_codes_1.default[http_response_codes_1.default.METHOD_NOT_ALLOWED]) {
    return sendJSONResponse(res, http_response_codes_1.default.METHOD_NOT_ALLOWED, msg);
}
exports.send405MethodNotAllowed = send405MethodNotAllowed;
function send409Conflict(res, msg = http_response_codes_1.default[http_response_codes_1.default.CONFLICT]) {
    return sendJSONResponse(res, http_response_codes_1.default.CONFLICT, msg);
}
exports.send409Conflict = send409Conflict;
function send500ServerError(res, msg = http_response_codes_1.default[http_response_codes_1.default.INTERNAL_SERVER_ERROR]) {
    return sendJSONResponse(res, http_response_codes_1.default.INTERNAL_SERVER_ERROR, msg);
}
exports.send500ServerError = send500ServerError;
function send503ServiceUnavailable(res, msg = http_response_codes_1.default[http_response_codes_1.default.SERVICE_UNAVAILABLE]) {
    return sendJSONResponse(res, http_response_codes_1.default.SERVICE_UNAVAILABLE, msg);
}
exports.send503ServiceUnavailable = send503ServiceUnavailable;
const callbackError400 = (req, res) => send400BadRequest(res, 'default callback http.400');
exports.callbackError400 = callbackError400;
const callbackError405 = (req, res) => send405MethodNotAllowed(res, 'default callback http.405');
exports.callbackError405 = callbackError405;
/**
 * Send content as 'object' ONLY.
 * * res Express response object
 * * status - HTTP Status Code
 * * content - String or Object for transmition to client
 */
function sendJSONResponse(res, status, content = 'response is undefined') {
    const response = (typeof content === 'object') ?
        content
        : { 'message': content };
    return res.status(status).json(response);
}
exports.sendJSONResponse = sendJSONResponse;
// export default ExpressResponses;
//# sourceMappingURL=express-responses.js.map