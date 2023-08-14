
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


import { DateTypes, WorkDateOption } from '../types';
import weeks from 'asklim/weeks';

const ONE_DAY = 86_400_000;


function factory (options: WorkDateOption) {

    const optDelta = options?.delta ?? 0;
    const DELTA = optDelta < ONE_DAY ? optDelta
        : 0 //midnight
    ;

    const TIMEZONE_OFFSET = (new Date()).getTimezoneOffset() * 60 * 1000;
    // UTC+3:00 -> TZoffset = -180min (Знак наоборот)
    // НО!! Local = UTC.valueOf() + TZoffset
    // Date("2021-01-24T12:00:00+03:00") = 1611478800000
    // Date("2021-01-24T12:00:00Z")      = 1611489600000
    // Для одного и того же времени: восточнее - меньше
    // Чтобы из локального времени сделать UTC надо
    // вычесть TZoffset.


    /***
     * Количество миллисекунд от ближайшей полночи до atDate
     * @param {Date} atDate - момент времени
     * @returns {number}
     */
    function msFromMidnight (atDate: Date): number {

        const iH = atDate.getHours(); // for local time
        const iM = atDate.getMinutes();
        const iS = atDate.getSeconds();
        const iMs = atDate.getMilliseconds();
        return iMs + 1000 * ( iS + 60 * ( iM + 60 * iH ));
    }


    /**
     * Дата (UnixTime) отображенная на ужатые сутки,
     * дата до HH:MM:SS является предыдущим днём
     * (задаётся nextWorkDayTime.delta)
     * @param {Date} atDate - отображаемая? дата
     * @returns {Number}
     */
    function mappedUnixTime (atDate: Date): number {

        /*
        * ПРОБЛЕМА: если delta 14:00, то если время след.дня
        * 00:00 .. 04:00, то при вычитании delta, проскакиваем
        * вторую половину дня и уходим на один день дальше,
        * потому что надо 14 часов отобразить на 10 часов
        * Надо не просто смещаться, а еще и ужиматься
        */

        const inDayTime = msFromMidnight( atDate ); // Local Time

        const momentX = atDate.valueOf(); //UTC

        const baseUTC = inDayTime < DELTA ?
            momentX - inDayTime + DELTA - ONE_DAY
            : momentX - inDayTime + DELTA;

        /*let baseMoment = inDayTime < delta
            ? atDate.valueOf() - inDayTime + delta - ONE_DAY
            // delta of prev 24h
            : atDate.valueOf() - inDayTime + delta;
            //delta-point of this 24h*/

        //let kMappingPeriod = ( ONE_DAY - delta ) / ONE_DAY;

        const valueX = momentX - baseUTC;
        //let kRelativePosition = valueX / ONE_DAY;
        //let k = kRelativePosition * kMappingPeriod;

        return (
            baseUTC + Math.round( (ONE_DAY - DELTA) * valueX / ONE_DAY )
        );
    }


    /**
     * Смещает startDate на offset дней и Отображает на
     * предыдущие сутки после delta-point
     * т.е. этот смещенный момент времени
     * ВСЕГДА After delta-point.
     * offset может быть >0 | <0 | =0
     */
    function theMappedDeltaDate (
        startDate: Date,
        offset = 0
    ): Date {
        //let mapped = mappedUnixTime( startDate );
        return new Date(
            mappedUnixTime( startDate ) + ONE_DAY * offset
        );
    }


    /**
     * В рабочую дату не попадает понедельник
     * *         Sunday  Monday  Tue <- Calendar
     * * --d----|----d----|----d----|----d----|--
     * * --0---------0-------------------0-------
     * *     Saturday  Sunday         Tue <- workDay
     * * 'd' - delta point, '|' - midnight
     * * '0' - start new WorkDay
     * * Monday & Tue before delta = Sunday
     * ***
     * format of return (ISO day): 'YYYY-MM-DD'
    **/
    function toISODay (
        offset = 0,
        baseDay: DateTypes = Date.now()
    ) {

        const startDate = new Date( baseDay );
        if( Number.isNaN( startDate.valueOf() )){
            throw new Error('Invalid date of baseDay.');
        }

        const dtLocal = theMappedDeltaDate( startDate, offset );

        // if Monday map to Sunday, Monday is not work day;
        // mapped moment always after delta-point
        const startWorkDay = dtLocal.getDay() === 1 ?
            dtLocal.valueOf() - TIMEZONE_OFFSET - ONE_DAY
            : dtLocal.valueOf() - TIMEZONE_OFFSET;
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
        return (new Date( startWorkDay )).toISOString().split('T')[0];
    }

    const today = () => toISODay();

    const week = (atDate: DateTypes = toISODay()) => weeks.week21c( atDate );

    return {
        week,
        toISODay,
        today,
        msFromMidnight,
        mappedUnixTime,
        theMappedDeltaDate,
    };
}

export default factory;
