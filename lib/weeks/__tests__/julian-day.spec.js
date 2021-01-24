
const utils = require('../../../weeks');
const { 
  datesAsString,
  datesAsDate,
  datesSet,
} = require('./dataset-helper');


describe("function julianDay() testing ...", 
() => {

  datesAsString( datesSet )
  .forEach( elem => {
    it(`${elem[0]} is ${elem[2]} julian day.`, () => {
      expect( utils.julianDay( elem[0] )).toBe( elem[2] );
    });  
  });

  datesAsDate( datesSet )
  .forEach( elem => {
    it(`${elem[0]} is ${elem[2]} julian day.`, () => {
      expect( utils.julianDay( elem[0] )).toBe( elem[2] );
    });  
  });

  let firstJDN = new Date(-4713,10,25);
  //console.log(firstJDN);
  //console.log(`julian day number is ${julianDay(firstJDN)}`);
  it('First Julian day (JDN=1) is Nov,23 -4713', () => {
    expect( utils.julianDay( firstJDN )).toBe( 1 );
  });
  
});