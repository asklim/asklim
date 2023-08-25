"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loglevel_1 = __importDefault(require("loglevel"));
const isHeroku = process.env.DYNO && (process.env.PWD === '/app');
const isSystemdService = (process.stdout.isTTY == undefined);
const YELLOW_DARK = '\u001B[0;33;40m'; // dark-yellow
const YELLOW_BRIGHT = '\u001B[1;33;40m'; // bright-yellow
const ESCAPE_END = '\u001B[0m';
const DEBUG_SIGN_COLOR = YELLOW_BRIGHT;
const DEBUG_MESSAGE_COLOR = YELLOW_DARK;
class Logger {
    static setLevel(isProduction) {
        const { DEBUG, TRACE } = loglevel_1.default.levels;
        loglevel_1.default.setLevel(isProduction ? DEBUG : TRACE);
    }
    constructor(ticker = '') {
        this.debug = (...args) => loglevel_1.default.debug(this.debugPrefix('DEBUG') + DEBUG_MESSAGE_COLOR, ...args, ESCAPE_END);
        this.info = (...args) => {
            loglevel_1.default.info(this.logPrefix('INFO'), ...args);
        };
        this.warn = (...args) => {
            loglevel_1.default.warn(this.logPrefix('WARN'), ...args);
        };
        this.error = (...args) => {
            loglevel_1.default.error(this.logPrefix('ERR!'), ...args);
        };
        this.trace = (...args) => {
            loglevel_1.default.trace(this.debugPrefix('TRACE'), ...args);
        };
        this._ticker = ticker == '' ? '' : ` ${ticker}`;
    }
    // Замыкаем _ticker, но не _date, иначе
    // будет одно и то же время на момент вызова logger.<fn>()
    logPrefix(level) {
        const _date = (isHeroku ?? isSystemdService) ? ''
            : `[${(new Date()).toUTCString()}] `;
        return `${_date}${level}${this._ticker}`;
    }
    debugPrefix(level) {
        const _date = (isHeroku ?? isSystemdService) ? ''
            : `[${(new Date()).toISOString()}]`;
        return `${DEBUG_SIGN_COLOR}${level}${ESCAPE_END} ${_date}` +
            `${DEBUG_MESSAGE_COLOR}${this._ticker}${ESCAPE_END}`;
    }
}
exports.default = Logger;
//# sourceMappingURL=logger-class.js.map