const tail = require('./tailFinder');

describe('Tail', () => {

    it('Tail of [1,2,3] should be [2,3]', () => {
        expect(tail([1, 2, 3])).toEqual([2,3]);
    });

    it('Tail of [1] should be []', () => {
        expect(tail([1])).toEqual([]);
    });

    it('Tail of undefined should be undefined', () => {
        expect(tail(undefined)).toEqual(undefined);
    });

    it('tail of [] should be []', () => {
        expect(tail([])).toEqual([]);
    });
})
