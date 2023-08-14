// / <reference path="../../dist/index.d.ts" />

import {
    rsisFactory,
    WorkDateOption,
    WorkDateFunction
} from '../../src';
// import { rsisFactory } from '../../src/';

const options12 = {
    delta : 12*60*60*1000,  // 12h*60m*60s*1000ms
};

const options08 = {
    delta : 8*60*60*1000,    // 8h*60m*60s*1000ms
};

//const options14 = {
//    delta : 14*60*60*1000,  // 14h*60m*60s*1000ms
//};


const offsets = Array( 33 ).fill(1).map( (_, i) => i-16 );
//[
//  -16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,
//  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
//];



const workEmpty = rsisFactory( undefined );
const testsEmpty = makeTestDates( workEmpty.workDate, offsets, new Date() );

//console.log( `testsEmpty length is ${testsEmpty.length}\n`, testsEmpty[0] );

describe(
    "\nworkDateFactory (MISSING DELTA) testing ...",
    () => {
        testsEmpty.
        forEach( (elem) => {
            const { testDate, rsisISO, expectISO } = elem;
            test(
                `workWeek: ${workEmpty.week( testDate )} ` +
                `testDate: ${testDate.toUTCString()} ` +
                `expected: ${expectISO}.`,
                () => {
                    expect( rsisISO ).toBe( expectISO );
                }
            );
        });
    }
);


const work08 = rsisFactory( options08 );

describe(
    "\nworkDate.today() testing ...",
    () => {
        test(
            `workDate: ${work08.workDate()} workWeek: ${work08.week()}.`,
            () => {
            //Expected: 2019-12-18T20:28:07.546Z
            //Received: 2019-12-18T20:28:07.545Z
            // milliseconds may be different
                const dayISO = work08.toISODay(); //.toISOString().split('.')[0];
                const todayISO = work08.today(); //.toISOString().split('.')[0];
                expect( dayISO ).toBe( todayISO );
            }
        );
    });


describe(
    "\nworkDate.toISODate() permanent values testing ...",
    () => {
        getPermanentValues0800().
    forEach( (elem) => {
        const [ testDate, expectISO ] = elem;
        const rsisISO = work08.toISODay( 0, testDate );
        test(
            `workWeek: ${workEmpty.week( testDate )} ` +
            `testDate: ${testDate.toUTCString()} ` +
            `expected: ${expectISO}.`,
            () => {
                expect( rsisISO ).toBe( expectISO );
            }
        );
    });
    });


const work12 = rsisFactory( options12 );
const tests12 = makeTestDates( work12.workDate, offsets, new Date(), options12 );
//console.log( tests );

describe(
    "\nworkDate.toISODate() generated values testing ...",
    () => {
        tests12.
        forEach( (elem) => {
            const { testDate, rsisISO, expectISO } = elem;
            test(
                `workWeek: ${workEmpty.week( testDate )} ` +
                `testDate: ${testDate.toUTCString()} ` +
                `expected: ${expectISO}.`,
                () => {
                    expect( rsisISO ).toBe( expectISO );
                }
            );
        });
    }
);



/*
describe("function work.week() .today testing ...", () =>
{
  it(`'today' week: ${workDate.week()} date: ${workDate.today()}.`,
  () => {
    expect( workDate.week()).toBe( workDate.week() );
  });

  it(`week+1: ${workDate.week(1)} week-1: ${workDate.week(-1)}.`,
  () => {
    expect( workDate.week()).toBe( workDate.week() );
  });

  it(`week+2: ${workDate.week(2)} week-2: ${workDate.week(-2)}.`,
  () => {
    expect( workDate.week()).toBe( workDate.week() );
  });
});
*/

/************************************************************** */

type TTestCortege = [Date, string];

// delta-point = 08:00
function  getPermanentValues0800 (): TTestCortege[] {
    return [
        [new Date( 2019, 11, 23,  7), "2019-12-22"], //Monday
        [new Date( 2019, 11, 23,  8), "2019-12-22"],
        [new Date( 2019, 11, 24,  7), "2019-12-22"], //Tuesday
        [new Date( 2019, 11, 24,  8), "2019-12-24"],
        [new Date( 2019, 11, 25,  7), "2019-12-24"],
        [new Date( 2019, 11, 25, 12), "2019-12-25"],
        [new Date( 2019, 11, 26, 12), "2019-12-26"],
        [new Date( 2019, 11, 29, 12), "2019-12-29"],
        [new Date( 2019, 11, 30, 12), "2019-12-29"], //Mon
        [new Date( 2019, 11, 31,  7), "2019-12-29"], //Tue
        [new Date( 2019, 11, 31, 12), "2019-12-31"],
        [new Date( 2020,  0,  1, 12), "2020-01-01"],
    ];
}

interface TTestDates {
    testDate: Date;
    startDate: Date;
    offset: number;
    rsisISO: string | undefined;
    expectISO: string | undefined;
}


function makeTestDates (
    // eslint-disable-next-line no-unused-vars
    workDateFunc: WorkDateFunction,
    offsets: number[],
    initDate: Date,
    options: WorkDateOption = {}
): TTestDates[] {

    const initDay = initDate.getDate();
    const iMonthIdx = initDate.getMonth();
    const iYear = initDate.getFullYear();
    //const iH = initDate.getHours();
    const iM = initDate.getMinutes();
    const iS = initDate.getSeconds();
    const iMs = initDate.getMilliseconds();

    const delta = options?.delta ? options.delta : 0;

    return offsets.flatMap(
        (value) => {

            const testDay = initDay + value;

            return (
                Array.from( {length: 24}, (v,i) => i )
                .map( (tHour) => {
                    const startDate = new Date(
                        iYear, iMonthIdx, initDay, tHour, iM, iS, iMs
                    );

                    const testDate = new Date(
                        iYear, iMonthIdx, testDay, tHour, iM, iS, iMs
                    );

                    const msFromMidnight = iMs + 1000*( iS + 60*( iM + tHour*60));
                    const isBeforeNewWorkday = msFromMidnight < delta;

                    let expectedDate: Date | undefined;

                    if( testDate.getDay() === 1 ) {
                        expectedDate = new Date( iYear, iMonthIdx, testDay - 1, 12 );
                    }
                    else if( testDate.getDay() === 2 ) {
                        expectedDate = isBeforeNewWorkday
                            ? new Date( iYear, iMonthIdx, testDay - 2, 12 )
                            : new Date( iYear, iMonthIdx, testDay, 12 );
                    }
                    else {
                        expectedDate = isBeforeNewWorkday
                            ? new Date( iYear, iMonthIdx, testDay - 1, 12 )
                            : new Date( iYear, iMonthIdx, testDay, 12 );
                    }

                    return ({
                        testDate,
                        startDate,
                        offset: value,
                        rsisISO: workDateFunc( value, startDate ),
                        expectISO: expectedDate?.toISOString().split('T')[0],
                    });
                })
            );
        }
    );
}
