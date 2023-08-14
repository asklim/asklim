
import { weeks } from '../../src';
import {
    datesAsString,
    datesAsDate,
    datesSet,
    datesElem,
} from './dataset-helper';

const { week21c } = weeks;

describe(
    "function week21c() testing ...",
    () => {

        const dtNow = new Date();
        //let dtNow = Date.now();
        const strNow = dtNow.toString();

        test(
            'week21c( x: Date ) should be return Number',
            () => {
                const value = week21c( dtNow );
                expect( typeof( value )).toBe('number');
            });

        test(
            'week21c( x: String ) should be return Number',
            () => {
                const value = week21c(strNow);
                expect( typeof( value )).toBe('number');
            });


        datesAsString( datesSet ).forEach( (elem: datesElem) => {
            test(
                `${elem[0] as string} is ${elem[1] as number} week.`,
                () => {
                    expect( week21c( elem[0] )).toBe( elem[1] );
                });
        });

        datesAsDate( datesSet ).forEach( (elem: datesElem) => {
            test(
                `${elem[0] as string} is ${elem[1] as number} week.`,
                () => {
                    expect( week21c( elem[0] )).toBe( elem[1] );
                });
        });

        /*
    console.log(new Date(-4713,10,23));
    test('First Julian day (JDN=1) Nov,23 -4713 is week -350271', () => {
        expect( week21c( new Date(-4713,10,23)) ).toBe( -350271 );
        // receive -350273
    });
    */

        it('42 equal 42', () => {
            expect("42").toBe("42");
        });

        it('2 equal 2', () => {
            expect("2").toBe("2");
        });
    });
