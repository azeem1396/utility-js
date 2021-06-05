const head = require('./headFinder');

describe('Head', () => {

    it('head of [1,2,3] should be 1', () => {
        expect(head([1, 2, 3])).toEqual(1);
    });

    it('head of [] should be undefined', () => {
        expect(head([])).toEqual(undefined);
    }); 
    
    it('head of undefined should be undefined', () => {
        expect(head(undefined)).toEqual(undefined);
    });


})
