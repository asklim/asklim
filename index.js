const weeks = require( './weeks' );
const httpResponseCodes = require( './lib/http/http-response-codes' );
const httpResponses = require( './lib/http/http-responses' );
const consoleLogger = require( './lib/logger/logger' );

module.exports = {
    ... weeks,
    ... httpResponses,
    httpResponseCodes,
    consoleLogger,
};
