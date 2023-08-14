"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BASE = 1 * 10;
/* rounding to 1 digit after decimal period */
/*
Непредсказуемое решение: last = 1, а должно быть 0
    period = 12
    item = {
        gid : "2012030106",
        name : "Джаф.лЗ ФруктоАссорт 100г",
        gr : "10",
        qpu : 20,
        from : "RU,BY",
        frAct : 6,
        fqL : 0.5,
        fqA : 0.4166,
        fqM : 0.8333,
        valid : 24,
    }
*/
/**
 * Объектов из api/sum/weeknatural для расчёта нужного
 * количества коробок/Units на требуемое количество:
 * 12, 24, 36, 96 рабочих дней или другое.
 * ***
 * Настраивается в /src/config/enum-values/procurementPeriods
 * @return
 * * [ unitsForLast, unitsForAverage, unitsForMaximal ]
 * * Возвращает массив из трех значений:
 * * - сколько нужно коробок на период period
 * * @ по частоте продаж:
 * * - последней, средней за 6 недель, максимальной за 6 недель
 * */
const needUnitsForPeriod = (item, period) => {
    const countLast = period * item.fqL - item.frAct;
    const unitsLast = toWholeUnits(countLast, item.qpu);
    const countAvrg = period * item.fqA - item.frAct;
    const unitsAvrg = toWholeUnits(countAvrg, item.qpu);
    const countMax = period * item.fqM - item.frAct;
    const unitsMax = toWholeUnits(countMax, item.qpu);
    return [unitsLast, unitsAvrg, unitsMax];
};
exports.default = needUnitsForPeriod;
function toWholeUnits(value, qpu) {
    return Math.round(BASE * value) / BASE > 0
        ? 1 + Math.trunc(value / qpu)
        : 0;
}
//# sourceMappingURL=needUnitsForPeriod.js.map