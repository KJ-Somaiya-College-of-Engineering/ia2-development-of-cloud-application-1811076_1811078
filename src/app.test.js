const { dayOfTheWeek } = require('./sample.js');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/25/2021') );
    expect( day ).toBe('Thursday');
});