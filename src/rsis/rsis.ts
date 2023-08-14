// export * from './needUnitsForPeriod';
// export * from './workDate';

import needUnitsForPeriod from './needUnitsForPeriod';
import WorkDateFactory from './workDate';
import { WorkDateOption } from '../types';

export function rsisFactory (
    options = {} as WorkDateOption
) {
    const {
        week,
        toISODay,
        today
    } = WorkDateFactory( {...options} );

    const workDate = toISODay;
    // workDate.week = week;
    // workDate.today = today;
    // workDate.toISODay = toISODay;

    return {
        workDate,
        week,
        toISODay,
        today,
        needUnitsForPeriod,
    };
}

export default rsisFactory;
