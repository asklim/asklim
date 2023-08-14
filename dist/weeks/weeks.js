"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.week21c = exports.julianDay = exports.JDN_of_20010101 = void 0;
const julian_day_1 = __importDefault(require("./julian-day"));
exports.julianDay = julian_day_1.default;
const week21c_1 = __importStar(require("./week21c"));
Object.defineProperty(exports, "week21c", { enumerable: true, get: function () { return week21c_1.default; } });
Object.defineProperty(exports, "JDN_of_20010101", { enumerable: true, get: function () { return week21c_1.JDN_of_20010101; } });
exports.default = {
    JDN_of_20010101: week21c_1.JDN_of_20010101,
    julianDay: julian_day_1.default,
    week21c: week21c_1.default,
};
//# sourceMappingURL=weeks.js.map