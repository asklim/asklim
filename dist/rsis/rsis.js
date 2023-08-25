"use strict";
// export * from './needUnitsForPeriod';
// export * from './workDate';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const needUnitsForPeriod_1 = __importDefault(require("./needUnitsForPeriod"));
const workDate_1 = __importDefault(require("./workDate"));
function rsisFactory(options = {}) {
    const { week, toISODay, today } = (0, workDate_1.default)({ ...options });
    const workDate = toISODay;
    // workDate.week = week;
    // workDate.today = today;
    // workDate.toISODay = toISODay;
    return {
        workDate,
        week,
        toISODay,
        today,
        needUnitsForPeriod: needUnitsForPeriod_1.default,
    };
}
exports.default = rsisFactory;
// export default rsisFactory;
//# sourceMappingURL=rsis.js.map