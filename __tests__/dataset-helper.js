
const datesSet = [
  ['2019-02-27', 948, 2458542],
  ['2001-01-08', 2, 2451918, 'Mon'],
  ['2001-01-07', 1, 2451917, 'Sun'],
  ['2001-01-06', 1, 2451916],
  ['2001-01-05', 1, 2451915],
  ['2001-01-04', 1, 2451914],
  ['2001-01-03', 1, 2451913],
  ['2001-01-02', 1, 2451912],
  ['2001-01-01', 1, 2451911, 'Mon, First day of XXI century'],
  ['2000-12-31', 0, 2451910, 'Sun'],
  ['2000-12-30', 0, 2451909],
  ['2000-12-29', 0, 2451908],
  ['2000-12-28', 0, 2451907],
  ['2000-12-27', 0, 2451906],
  ['2000-12-26', 0, 2451905],
  ['2000-12-25', 0, 2451904, 'Mon'],
  ['2000-12-24', -1, 2451903, 'Sun'],
  ['2000-01-01', -52, 2451545, 'Sat'],
  ['1970-01-05', -1616, 2440592, 'Mon'],
  ['1970-01-04', -1617, 2440591, 'Sun'],
  ['1970-01-03', -1617, 2440590],
  ['1970-01-02', -1617, 2440589],
  ['1970-01-01', -1617, 2440588, 'Thu, Begin a UNIX Epoch'],
  ['1969-12-31', -1617, 2440587],
  ['1969-12-30', -1617, 2440586],
  ['1969-12-29', -1617, 2440585, 'Mon'],
  ['1969-12-28', -1618, 2440584, 'Sun'],
  ['1901-01-01', -5217, 2415386, 'Tue']
];

// Данные раньше 1901 года
// Требуется доработка функции и правильности данных

const dates19Century = [ 
  ['1900-01-02', -5269, 2415021, 'Tue'],
  ['1900-01-01', -5269, 2415020, 'Mon, First day in Excel'],
  ['1899-12-31', -5270, 2415019, 'Sun'],
  ['1899-12-30', -5270, 2415018],
  ['1899-12-29', -5270, 2415017],
  ['1899-12-28', -5270, 2415016],
  ['1899-12-27', -5270, 2415015],
  ['1899-12-26', -5270, 2415014],
  ['1899-12-25', -5270, 2415013, 'Mon'],
  ['1899-12-24', -5271, 2415012, 'Sun']
 // ['-4713-11-23', -350271, 1, 'First Julian day JDN=1']
];


const datesAsString = (dates) => dates.map( 
    (elem) => [ elem[0], elem[1], elem[2], ]
);         

/**
 *  Создаем массив из Date вместо строк
**/
const datesAsDate = (dates) => dates.map( 
    (elem) => [ new Date( elem[0]), elem[1], elem[2] ]
);

module.exports = {
  datesAsString,
  datesAsDate
  ,
  datesSet,
  dates19Century,
};