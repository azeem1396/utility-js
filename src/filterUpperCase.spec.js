const filterUpperCase = require('./filterUpperCase');

describe('FilterUpperCase', () => {

    it('filterUpperCase(undefined) should be undefined', () => {
        expect(filterUpperCase(undefined)).toEqual(undefined);
    });

    it("filterUpperCase([]) should be []", () => {
        expect(filterUpperCase([])).toEqual([]);
    });

    it("filterUpperCase(['a']) should be []", () => {
        expect(filterUpperCase(['a'])).toEqual([]);
    });

    it("filterUpperCase(['a','B','BD','bD','A','c']) should be []", () => {
        expect(filterUpperCase(['a','B','BD','bD','A','c'])).toEqual(['B','BD','A']);
    });

})