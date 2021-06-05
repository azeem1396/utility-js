const map = require('./map');
const identity = require('./identity');
const cube = require('./cube');

describe('Map', () => {

    it('Map([],identity) should be []', () => {
        expect(map([],identity)).toEqual([]);
    });

    it('Map([1,2,3],identity) should be [1,2,3]', () => {
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });

    it('Map(undefined,identity) should be undefined', () => {
        expect(map(undefined,identity)).toEqual(undefined);
    });

    it('Map([],cube) should be []', () => {
        expect(map([1],cube)).toEqual([1]);
    });

    it('Map([1,2,3],cube) should be [1,8,27]', () => {
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('Map(undefined,cube) should be undefined', () => {
        expect(map(undefined,cube)).toEqual(undefined);
    });

    it('Map([{x:10},{x:11}],someObject=>someObject.x+1) should be [11,12]', () => {
        expect(map([{x:10},{x:11}], someObject=>someObject.x + 1)).toEqual([11,12]);
    });

    it('Map([a{x:10}],someObject=>someObject.x+1) should be [11]', () => {
        expect(map([{x:10}], someObject=>someObject.x + 1)).toEqual([11]);
    });

    it('Map([],someObject=>someObject.x+1) should be []', () => {
        expect(map([], someObject=>someObject.x + 1)).toEqual([]);
    });

    it('Map(undefined,someObject=>someObject.x+1) should be undefined', () => {
        expect(map(undefined, someObject=>someObject.x + 1)).toEqual(undefined);
    });

})
