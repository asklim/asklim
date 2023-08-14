import julianDay from './julian-day';
import { DateTypes } from '../types';

// first day of XXI century: Jan 01, 2001
export const JDN_of_20010101 = 2_451_911;

/**
 * Week Number of gregorianDate on local time
 * ***
 * - week21c('2001-01-01') = 1
 * - Jan 01, 2001, Monday - begin of week21c = #1
 */
export default function week21c (gregorianDate: DateTypes) {

    //const gDate = new Date( gregorianDate );

    //console.log(`argum = ${gregorianDate}`);
    //console.log(`gDate = ${gDate}`);

    const diff = julianDay( gregorianDate ) - JDN_of_20010101;
    //console.log(`diff = ${diff}`);

    return Math.floor( diff / 7 ) + 1;
}
