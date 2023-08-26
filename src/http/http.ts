
// import { default as StatusCodes } from './status-codes-enum';
import { default as StatusCodes } from './status-codes-object';
import * as ExpressResponses from './express-responses';

const http = {
    StatusCodes,
    ... ExpressResponses,
};

export default http;
