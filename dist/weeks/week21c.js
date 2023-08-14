"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JDN_of_20010101 = void 0;
const julian_day_1 = __importDefault(require("./julian-day"));
// first day of XXI century: Jan 01, 2001
exports.JDN_of_20010101 = 2451911;
/**
 * Week Number of gregorianDate on local time
 * ***
 * - week21c('2001-01-01') = 1
 * - Jan 01, 2001, Monday - begin of week21c = #1
 */
function week21c(gregorianDate) {
    //const gDate = new Date( gregorianDate );
    //console.log(`argum = ${gregorianDate}`);
    //console.log(`gDate = ${gDate}`);
    const diff = (0, julian_day_1.default)(gregorianDate) - exports.JDN_of_20010101;
    //console.log(`diff = ${diff}`);
    return Math.floor(diff / 7) + 1;
}
exports.default = week21c;
//# sourceMappingURL=week21c.js.map