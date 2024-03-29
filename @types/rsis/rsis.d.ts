import { WorkDateOption } from '../types';
export default function rsisFactory(options?: WorkDateOption): {
    workDate: (offset?: number, baseDay?: import("../types").DateTypes) => string | undefined;
    week: (atDate?: import("../types").DateTypes) => number;
    toISODay: (offset?: number, baseDay?: import("../types").DateTypes) => string | undefined;
    today: () => string | undefined;
    needUnitsForPeriod: (item: import("../types").TItem, period: number) => number[];
};
//# sourceMappingURL=rsis.d.ts.map