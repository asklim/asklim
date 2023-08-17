
import { Logger } from '../../src/index';
const testLog = new Logger('test');

describe(
    'console Logger class testing ...',
    () => {
        test(`Logger is class (function), returns is object.`,
            () => {
                expect( typeof Logger ).toBe('function');
                expect( typeof testLog ).toBe('object');
                expect( testLog ).toBeInstanceOf( Logger );
            }
        );
        test(`Logger instance has properties.`,
            () => {
                expect( testLog ).toHaveProperty( '_ticker' );
                expect( testLog ).toHaveProperty( 'debug' );
                expect( testLog ).toHaveProperty( 'info' );
                expect( testLog ).toHaveProperty( 'warn' );
                expect( testLog ).toHaveProperty( 'error' );
                expect( testLog ).toHaveProperty( 'trace' );
                expect( Object.keys( testLog ) ).toHaveLength( 6 );
            }
        );
    }
);
