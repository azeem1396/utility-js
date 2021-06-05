const min = require('./min');

describe('Min', () => {

    it('Min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('Min of [1] is 1', () => {
        expect(min([1])).toEqual(1);
    });

    it('Min of [] is undefined', () => {
        expect(min([])).toEqual(undefined);
    });

    it('Min of undefined is undefined', () => {
        expect(min(undefined)).toEqual(undefined);
    });

})
