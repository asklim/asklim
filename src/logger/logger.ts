/* eslint-disable no-unused-vars */
const { PWD, DYNO } = process.env;
const isHeroku = DYNO && (PWD === '/app');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TArgs = any[];
enum Abbr {
    DEBUG = 'D:',
    INFO = 'I:',
    WARN = 'W:',
    ERROR = 'E:'
}
type LevelAbbr = Abbr.DEBUG | Abbr.INFO | Abbr.WARN | Abbr.ERROR;

export default function logger (ticker = '') {

    // Замыкаем suffix, но не prefix, иначе
    // будет одно и то же время на момент вызова create::logger
    const suffix = ticker == '' ? '' : ' ' + ticker;

    function log (abbr: LevelAbbr, ...args: TArgs) { // Все аргументы = массив аргументов

        const prefix = isHeroku
            ? ''
            : `[${(new Date()).toUTCString()}] `
        ;

        console.log(
            `${prefix}${abbr}${suffix}`,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            ...args // Распаковка массива в значения
        );  // После `suffix` есть пробел. `,` вставляет пробел.
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const debug = (...args: TArgs) => log( Abbr.DEBUG, ...args );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const info = (...args: TArgs) => log( Abbr.INFO, ...args );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const warn = (...args: TArgs) => log( Abbr.WARN, ...args );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const error = (...args: TArgs) => log( Abbr.ERROR, ...args );

    return ({
        debug,
        info,
        warn,
        error,
    });
}
