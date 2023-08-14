"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const { PWD, DYNO } = process.env;
const isHeroku = DYNO && (PWD === '/app');
var Abbr;
(function (Abbr) {
    Abbr["DEBUG"] = "D:";
    Abbr["INFO"] = "I:";
    Abbr["WARN"] = "W:";
    Abbr["ERROR"] = "E:";
})(Abbr || (Abbr = {}));
function logger(ticker = '') {
    // Замыкаем suffix, но не prefix, иначе
    // будет одно и то же время на момент вызова create::logger
    const suffix = ticker == '' ? '' : ' ' + ticker;
    function log(abbr, ...args) {
        const prefix = isHeroku
            ? ''
            : `[${(new Date()).toUTCString()}] `;
        console.log(`${prefix}${abbr}${suffix}`, 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ...args // Распаковка массива в значения
        ); // После `suffix` есть пробел. `,` вставляет пробел.
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const debug = (...args) => log(Abbr.DEBUG, ...args);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const info = (...args) => log(Abbr.INFO, ...args);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const warn = (...args) => log(Abbr.WARN, ...args);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const error = (...args) => log(Abbr.ERROR, ...args);
    return ({
        debug,
        info,
        warn,
        error,
    });
}
exports.default = logger;
//# sourceMappingURL=logger.js.map