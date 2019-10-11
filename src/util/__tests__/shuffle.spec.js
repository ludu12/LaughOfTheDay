import { shuffleArray } from '../shuffle';

describe('Shuffle util', () => {
    let inputArray, newArray;

    beforeEach(() => {
        inputArray = [1, 2, 3, 4, 5];
        newArray = shuffleArray(inputArray);
    });

    it('should return new shuffled array', () => {
        expect(newArray).not.toEqual(inputArray);
    });

});
