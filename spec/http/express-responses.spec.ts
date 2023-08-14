
import { ExpressResponses } from '../../src/http/http';

const {
    sendJSONResponse,
    // send405MethodNotAllowed,
    send500ServerError,
} = ExpressResponses;

import { Response } from 'express';

class fakeRes {
    fakeCode: number;
    fakeMsg: unknown;
    constructor () {
        this.fakeCode = 0;
        this.fakeMsg = "";
    }
    status (code: number): this {
        // console.log('status.code', code );
        this.fakeCode = code;
        return this;
    }
    json (ctx: unknown): unknown {
        // console.log('json.ctx:', ctx);
        this.fakeMsg = ctx;
        return this;
    }
}

// fakeRes.status( 500 ).json( 'SERVER_ERROR' );
// fakeRes.status( 500 ).json( { msg: 'SERVER_ERROR' } );

describe(
    'Express Responses testing ...',
    () => {
        const res = (new fakeRes as unknown) as Response;
        test(`sendJSONResponse invoke status() and json().`,
            () => {
                const test = sendJSONResponse( res, 500, 'SERVER_ERROR' );
                expect( test ).toHaveProperty('fakeMsg.message', 'SERVER_ERROR' );
                expect( test ).toHaveProperty('fakeCode', 500 );
            }
        );
        test(`send500ServerError invoke status() and json().`,
            () => {
                const test = send500ServerError( res, 'SERVER_ERROR' );
                expect( test ).toHaveProperty('fakeMsg.message', 'SERVER_ERROR' );
                expect( test ).toHaveProperty('fakeCode', 500 );
            }
        );
        // test(`sendJSONresponse invoke status() and json().`,
        //     () => {
        //         // send405MethodNotAllowed( res );
        //         // send405MethodNotAllowed( res, 'send405' );
        //         // send405MethodNotAllowed( res, 'send405' );
        //     }
        // );
    }
);
