import { keyValueString } from '../../../src/modules/utils.js';

describe('keyValueString', () => {
    test.each([
        { input: {}, expectedResult: '' },
        { input: { a: 1 }, expectedResult: 'a=1' },
        { input: { b: 2, a: 1 }, expectedResult: 'a=1, b=2' },
        { input: { c: 3, b: 2, a: 1 }, expectedResult: 'a=1, b=2, c=3' },
    ])('correctly constructs $expectedResult from $input', ({ input, expectedResult }) => {
        const output = keyValueString(input);
        expect(output).toBe(expectedResult);
    });
});
