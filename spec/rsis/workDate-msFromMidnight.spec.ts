
import { rsisFactory } from '../../src';
// const {
//     //msFromMidnight,
//     workDate : work08,
// } = require('../../../rsis')( {} );
const workDefault = rsisFactory( {} );

describe(
    "\nworkDate.msFromMidnight() testing ...",
    () => {
        test(
            `\nworkDate: ${workDefault.toISODay()} workWeek: ${workDefault.week()}.`,
            () => {
                //Expected: 2019-12-18T20:28:07.546Z
                //Received: 2019-12-18T20:28:07.545Z
                // milliseconds may be different
                const dayISO = workDefault.toISODay(); //.toISOString().split('.')[0];
                const todayISO = workDefault.today(); //.toISOString().split('.')[0];
                expect( dayISO ).toBe( todayISO );
            }
        );
    }
);
