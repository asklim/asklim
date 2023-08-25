
import { consoleLogger } from '../../src/';
const testLog = consoleLogger('test');

describe(
    'console logger testing ...',
    () => {
        test(`consoleLogger is function. returns is object.`,
            () => {
                expect( typeof consoleLogger ).toBe('function');
                expect( typeof testLog ).toBe('object');
            }
        );
        test(`logger returns has properties.`,
            () => {
                expect( testLog ).toHaveProperty('debug');
                expect( testLog ).toHaveProperty('info');
                expect( testLog ).toHaveProperty('warn');
                expect( testLog ).toHaveProperty('error');
                expect( Object.keys( testLog )).toHaveLength( 4 );
            }
        );
    }
);
