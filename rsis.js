
const { needUnitsForPeriod } = require( './lib/rsis/needUnitsForPeriod' );
const rsisWorkDateFactory = require( './lib/rsis/workDate' );


module.exports = function (options = {}) {

    const {
        week,
        toISODay,
        today
    } = rsisWorkDateFactory({ ...options });

    let workDate = toISODay;
    workDate.week = week;
    workDate.today = today;
    workDate.toISODay = toISODay;  


    return {
        workDate,
        needUnitsForPeriod,
    };
};