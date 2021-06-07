const identity = require('./identity')

describe('Identity', () => {

    it('identity(undefined) should return undefined', () => {
        expect(identity(undefined)).toEqual(undefined);
    });

    it('identity([]) should return []', () => {
        expect(identity([])).toEqual([]);
    });

    it('identity([1,2,3]) should return [1,2,3]', () => {
        expect(identity([1,2,3])).toEqual([1,2,3]);
    });

})
