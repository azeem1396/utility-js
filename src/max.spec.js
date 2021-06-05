const max = require('./max');

describe('Max', () => {

    it('Max of [1,2,3,4] is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('Max of [1] is 1', () => {
        expect(max([1])).toEqual(1);
    });

    it('Max of [] is undefined', () => {
        expect(max([])).toEqual(undefined);
    });

    it('Max of undefined is undefined', () => {
        expect(max(undefined)).toEqual(undefined);
    });

})
