
import { default as StatusCodes } from './status-codes';
import * as ExpressResponses from './express-responses';

const http = {
    StatusCodes,
    ... ExpressResponses,
};

export default http;
