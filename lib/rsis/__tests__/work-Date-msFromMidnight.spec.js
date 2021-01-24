
const { msFromMidnight } = require('../../../rsis')( {} );


describe("\nworkDate.msFromMidnight() testing ...", () => {

    test(`\nworkDate: ${work08.toISODay()} workWeek: ${work08.week()}.`,  
        () => {
            //Expected: 2019-12-18T20:28:07.546Z
            //Received: 2019-12-18T20:28:07.545Z
            // milliseconds may be different
            let dayISO = work08.toISODay(); //.toISOString().split('.')[0];
            let todayISO = work08.today(); //.toISOString().split('.')[0];    
            expect( dayISO ).toBe( todayISO );
        });  
});