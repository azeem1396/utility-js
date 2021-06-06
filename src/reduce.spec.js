const reduce = require('./reduce');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce(undefined,(x,y)=>x+y) should be undefined', () => {
        expect(reduce(undefined,(x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([1,2,3],(x,y)=>x+y) should be 6', () => {
        expect(reduce([1,2,3],(x,y)=>x+y)).toEqual(6);
    });

    it("reduce([1,2,'c'],(x,y)=>x+y) should be 3c", () => {
        expect(reduce([1,2,'c'],(x,y)=>x+y)).toEqual('3c');
    });

    it("reduce(['a',2,3],(x,y)=>x+y) should be a23", () => {
            expect(reduce(['a',2,3],(x,y)=>x+y)).toEqual('a23');
    });

    // ---------------------------------------------------------

    it('reduce([],v(x,y)=>x+y, 10) should be 10', () => {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it('reduce([1,2,3],v(x,y)=>x+y, 10) should be 16', () => {
        expect(reduce([1,2,3],(x,y)=>x+y,10)).toEqual(16);
    });

    it("reduce(['a','b','c'],(x,y)=>x+y,'z') should be zabc", () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });

    it("reduce([1,2,3],(x,y)=>x+y,'z') should be z6", () => {
        expect(reduce([1,2,3],(x,y)=>x+y,'z')).toEqual('z6');
    });

    it("reduce(['a','b','c'],(x,y)=>x+y,10) should be 10abc", () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y,10)).toEqual('10abc');
    });

    it("reduce([1,2,3,'a','b',4,5,'c',6,7],(x,y)=>x+y,'z') should be z6ab45c67", () => {
        expect(reduce([1,2,3,'a','b',4,5,'c',6,7],(x,y)=>x+y,'z')).toEqual('z6ab45c67');
    });

    it("reduce([1,2,3,'a','b',4,5,'c',6,7],(x,y)=>x+y,10) should be z6ab45c67", () => {
        expect(reduce([1,2,3,'a','b',4,5,'c',6,7],(x,y)=>x+y,10)).toEqual('106ab45c67');
    });

})