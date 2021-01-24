
/**
 * День делиться на две части:
 * точка delta - начало нового рабочего дня.
 * 1-я: до точки delta - отображается на вчера
 * 2-я: после точки - рабочий день в этих сутках
 * Смещение для Отображения
 *     |   Before delta  |   After delta
 * ----|-----------------|---------------
 * Mon | -delta          |    0-ONE_DAY     
 * Tue | -delta-ONE_DAY  |    0
 * ----|-----------------|---------------
 * Wed | -delta          |    0
 * Thu | -delta          |    0
 * Fri | -delta          |    0
 * Sat | -delta          |    0
 * Sun | -delta          |    0
 * --------------------------------------
**/


const { week21c } = require( '../../weeks' );

const ONE_DAY = 86400000;


module.exports = function (options) {

    const delta = options 
        && options.delta && options.delta < ONE_DAY
        ? options.delta
        : 0 //midnight
    ;
        
    const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;
    // UTC+3:00 -> TZoffset = -180min (Знак наоборот)
    // НО!! Local = UTC.valueOf() + TZoffset
    // Date("2021-01-24T12:00:00+03:00") = 1611478800000
    // Date("2021-01-24T12:00:00Z")      = 1611489600000
    // Для одного и того же времени: восточнее - меньше
    // Чтобы из локального времени сделать UTC надо
    // вычесть TZoffset.


    /*** 
     * @param {Date} atDate - момент времени
     * @returns {number}
     * Количество миллисекунд от ближайшей полночи до atDate 
     * 
     */
    function msFromMidnight (atDate) {

        let iH = atDate.getHours(); // for local time
        let iM = atDate.getMinutes();
        let iS = atDate.getSeconds();
        let iMs = atDate.getMilliseconds();
        return iMs + 1000 * ( iS + 60 * ( iM + 60 * iH ));
    }


    /**
     * @param {Date} atDate - отображаемая? дата
     * @returns {Number}
     * Дата (UnixTime) отображенная на ужатые сутки,
     * дата до HH:MM:SS является предыдущим днём 
     * (задаётся nextWorkDayTime.delta)
     * 
     */
    function mappedUnixTime (atDate) {

        /* 
        * ПРОБЛЕМА: если delta 14:00, то если время след.дня
        * 00:00 .. 04:00, то при вычитании delta, проскакиваем
        * вторую половину дня и уходим на один день дальше, 
        * потому что надо 14 часов отобразить на 10 часов
        * Надо не просто смещаться, а еще и ужиматься
        */
        
        let inDayTime = msFromMidnight( atDate ); // Local Time

        let momentX = atDate.valueOf(); //UTC

        let baseUTC = inDayTime < delta
            ? momentX - inDayTime + delta - ONE_DAY 
            : momentX - inDayTime + delta; 

        /*let baseMoment = inDayTime < delta
            ? atDate.valueOf() - inDayTime + delta - ONE_DAY 
            // delta of prev 24h
            : atDate.valueOf() - inDayTime + delta;
            //delta-point of this 24h*/

        //let kMappingPeriod = ( ONE_DAY - delta ) / ONE_DAY;
        
        let valueX = momentX - baseUTC;      
        //let kRelativePosition = valueX / ONE_DAY;
        //let k = kRelativePosition * kMappingPeriod;
        
        return ( 
            baseUTC + Math.round( (ONE_DAY - delta) * valueX / ONE_DAY )
        ); 
    }


    /**
     * @param {Date} startDate 
     * @param {Number} offset {>0 | <0 | =0}
     * @returns {Date}
     * Смещает на offset дней и Отображает на
     * предыдущие сутки после delta-point
     * т.е. этот смещенный момент времени 
     * ВСЕГДА After delta-point. 
     */
    function theMappedDeltaDate (startDate, offset = 0) {

        //let mapped = mappedUnixTime( startDate );
        
        return new Date( 
            mappedUnixTime( startDate ) + ONE_DAY * offset 
        );      
    }


    /**
     * @param {Number} offset
     * @param {Object Date} baseDay
     * @returns {String} 'YYYY-MM-DD' ISO day
     * В рабочую дату не попадает понедельник
     * Calendar: Sunday     Monday       Tue
     * --*----|----*----|----*----|----*----|
     * --|---------|-------------------|-------
     * work:Saturday       Sunday           Tue
     * '*' - delta point
     * Monday & Tue before delta = Sunday
     * 
    **/    
    function toISODay (offset = 0, baseDay = Date.now()) {

        let startDate = new Date( baseDay );
        if( typeof startDate !== "object" ){
            throw new Error( "Invalid date of baseDay." );  
        }

        const dtLocal = theMappedDeltaDate( startDate, offset );

        // if Monday map to Sunday, Monday is not work day;
        // mapped moment always after delta-point
        return new Date( 
            dtLocal.getDay() === 1
                ? dtLocal.valueOf() - timezoneOffset - ONE_DAY
                : dtLocal.valueOf() - timezoneOffset
        ).toISOString().split('T')[0];
        /*
           toISOString() всегда возвращает строку для UTC/GMT 
           с суффиксом Z. А нам надо представление даты для
           локального времени, потому что в районе полуночи
           (в зависимости от величины timezoneOffset) дата UTC
           может не соответствовать локальной.
           Обманываем toISOString(), как будто там уже наступили
           новые сутки, вычитая timezoneOffset
           p.s. Почему вычитаем - смотри определение в начале.
        */
    }

    const today = () => toISODay();

    const week = (atDate = toISODay()) => week21c( atDate );

    return {
        week,
        toISODay,
        today,
        msFromMidnight,
        mappedUnixTime,
        theMappedDeltaDate,
    };
};

