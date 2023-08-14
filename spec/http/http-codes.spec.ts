
import { HttpResponseCodes as HTTP } from '../../src/http/http';

describe(
    'HTTP Response Codes testing ...',
    () => {
        test(`Codes is number. And have values.`,
            () => {
                expect( typeof HTTP.CONTINUE ).toBe('number');
                expect( HTTP.OK ).toBe( 200 );
                expect( HTTP.CREATED ).toBe( 201 );
                expect( HTTP.NO_CONTENT ).toBe( 204 );
                expect( HTTP.BAD_REQUEST ).toBe( 400 );
                expect( HTTP.UNAUTHORIZED ).toBe( 401 );
                expect( HTTP.NOT_FOUND ).toBe( 404 );
                expect( HTTP.METHOD_NOT_ALLOWED ).toBe( 405 );
                expect( HTTP.CONFLICT ).toBe( 409 );
                expect( HTTP.INTERNAL_SERVER_ERROR ).toBe( 500 );
                expect( HTTP.SERVICE_UNAVAILABLE ).toBe( 503 );
            }
        );
    }
);
