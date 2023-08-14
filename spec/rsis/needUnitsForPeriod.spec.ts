
import {
    default as rsisFactory,
} from '../../src/rsis/rsis';

import { TItem } from '../../src/types';
const { needUnitsForPeriod } = rsisFactory();


const periods: Record<string, number> = { sp: 12, mp: 24, lp: 36, xlp: 96 };

const item: TItem = {
    gid: "2012030106",
    name: "Джаф.лЗ ФруктоАссорт 100г",
    gr: "10",
    qpu: 20,
    from: "RU,BY",
    frAct: 6,
    fqL: 0.5,
    fqA: 0.4166,
    fqM: 0.8333,
    valid: 24,
};

const result: Record<string, number[]> = {
    sp: [ 0, 0, 1 ],
    mp: [ 1, 1, 1 ],
    lp: [ 1, 1, 2 ],
    xlp: [ 3, 2, 4 ],
};
const errResult: number[] = [ 1, 0, 1 ];

// console.log('period:sp ', needUnitsForPeriod( item, period.sp ));

describe(
    'function needUnitsForPeriod() testing ...',
    () => {
        //['sp', 'mp', 'lp', 'xlp'].
        for( const [key, v] of Object.entries( periods )) {
            test(
                `period: ${v} result ${result[key]}.`,
                () => {
                    const str = needUnitsForPeriod( item, v ).toString();
                    expect( str ).toBe( result?.[key]?.toString() );
                }
            );
        }

        test(`period: ${periods?.sp} result ${result.sp!}.`,
            () => {
                const str = needUnitsForPeriod( item, periods.sp! ).toString();
                expect( str ).not.toBe( errResult.toString() );
            }
        );
    }
);
