/// <reference types="express" />
/// <reference types="qs" />
import { default as StatusCodes } from './status-codes';
declare const http: {
    send200Ok(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send201Created(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send204NoContent(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send400BadRequest(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send401UnAuthorized(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send404NotFound(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send405MethodNotAllowed(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send409Conflict(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send500ServerError(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    send503ServiceUnavailable(res: import("express").Response<any, Record<string, any>>, msg?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    sendJSONResponse(res: import("express").Response<any, Record<string, any>>, status: number, content?: import("../types").ResponseMessage): import("express").Response<any, Record<string, any>>;
    callbackError400: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>) => import("express").Response<any, Record<string, any>>;
    callbackError405: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>) => import("express").Response<any, Record<string, any>>;
    StatusCodes: typeof StatusCodes;
};
export default http;
//# sourceMappingURL=http.d.ts.map