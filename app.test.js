describe('FlatArray', () => {
    it('flatten an array of arbitrarily nested arrays', () => {
        expect(flatArray([[1, 2, [3]], 4]))
            .toEqual([1, 2, 3, 4]);
    });
    it('flatten this array', () => {
        expect(flatArray([[1, 2], 3, [4, [5, 6]], [7, 8]]))
            .toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })
});
