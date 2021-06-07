const cube = require('./cube');

describe('Cube', () => {

    it('Cube of undefined is undefined', () => {
        expect(cube(undefined)).toEqual(undefined);
    });

    it('Cube of [] is []', () => {
        expect(cube([])).toEqual([]);
    });

    it('Cube of [0] is [0]', () => {
        expect(cube([0])).toEqual([0]);
    });

    it('Cube of [0,1,2,3] is [0,1,8,27]', () => {
        expect(cube([0,1,2,3])).toEqual([0,1,8,27]);
    });


})
