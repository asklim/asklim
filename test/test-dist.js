/* eslint-disable @typescript-eslint/no-var-requires */
const asklim = require('asklim');
console.log( asklim );
console.log('Object `dist/index` entries count:', Object.entries( asklim ).length );

const { rsisFactory } = require('asklim/rsis');
console.log( rsisFactory );

const rsis = rsisFactory();
console.log( rsis );

console.log("typeof asklim/rsis", typeof rsis ); // object



const { needUnitsForPeriod } = rsis;

const item = {
    gid: "2012030106",
    name: "Джаф.лЗ ФруктоАссорт 100г",
    gr: "10",
    qpu: 20,
    from: "RU,BY",
    frAct: 6,
    fqL: 0.5,
    fqA: 0.4166,
    fqM: 0.8333,
    valid: 24,
};

console.log("typeof", typeof needUnitsForPeriod ); // function

let str = needUnitsForPeriod( item, 36 ).toString();

console.log("result", str); // 1,1,2
