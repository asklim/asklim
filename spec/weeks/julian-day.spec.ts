
import { weeks } from '../../src';
import {
    datesAsString,
    datesAsDate,
    datesSet,
    datesElem,
} from './dataset-helper';


describe(
    "function julianDay() testing ...",
    () => {

        datesAsString( datesSet ).forEach( (elem: datesElem) => {
            it(
                `${elem[0] as string} is ${elem[2] as number} julian day.`,
                () => {
                    expect( weeks.julianDay( elem[0] )).toBe( elem[2] );
                }
            );
        });

        datesAsDate( datesSet ).forEach( (elem: datesElem) => {
            it(
                `${elem[0] as string} is ${elem[2] as number} julian day.`,
                () => {
                    expect( weeks.julianDay( elem[0] )).toBe( elem[2] );
                });
        });

        const firstJDN = new Date( -4713, 10, 25 );
        //console.log(firstJDN);
        //console.log(`julian day number is ${julianDay(firstJDN)}`);
        it('First Julian day (JDN=1) is Nov,23 -4713', () => {
            expect( weeks.julianDay( firstJDN )).toBe( 1 );
        });

    });
