const filter = require('./filter');
const filterUpperCase = require('./filterUpperCase');

describe('Filter', () => {

    it('filter([1,2,3,4],x => true) returns [1,2,3,4]', () => {
        expect(filter([1,2,3,4],x => true)).toEqual([1,2,3,4]);
    });

    it('filter([],x => true) returns []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('filter(undefined,x => true) returns undefined', () => {
        expect(filter(undefined,x => true)).toEqual(undefined);
    });

    // --------------------------------------------------------

    it('filter([1,2,3,4],x => false) returns []', () => {
        expect(filter([1,2,3,4],x => false)).toEqual([]);
    });

    it('filter([],x => false) returns []', () => {
        expect(filter([],x => false)).toEqual([]);
    });

    it('filter(undefined,x => false) returns undefined', () => {
        expect(filter(undefined,x => false)).toEqual(undefined);
    });

    // --------------------------------------------------------

    it('filter([1,2,3,4],x => x > 1) returns [2,3,4]', () => {
        expect(filter([1,2,3,4],x => x > 1)).toEqual([2,3,4]);
    });

    it('filter([1,2,3,4],x => x > 5) returns []', () => {
        expect(filter([1,2,3,4],x => x > 5)).toEqual([]);
    });

    it('filter([],x => x > 1) returns []', () => {
        expect(filter([],x => x > 1 )).toEqual([]);
    });

    it('filter(undefined,x => x > 1) returns undefined', () => {
        expect(filter(undefined,x => x > 1)).toEqual(undefined);
    });

    // --------------------------------------------------------

    it("filter(['a','B','c','D'],filterUpperCase) returns ['B','D']", () => {
        expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });

    it("filter(['a','BE','cF','D'],filterUpperCase) returns ['D']", () => {
        expect(filter(['a','BE','cF','D'],filterUpperCase)).toEqual(['BE','D']);
    });

    it("filter(['a','b','c','d'],filterUpperCase) returns []", () => {
        expect(filter(['a','b','c','d'],filterUpperCase)).toEqual([]);
    });

    it("filter([],filterUpperCase) returns []", () => {
        expect(filter([],filterUpperCase)).toEqual([]);
    });

    it("filter(undefined,filterUpperCase) returns undefined", () => {
        expect(filter(undefined,filterUpperCase)).toEqual(undefined);
    });

})
