import { keyValueString, sortEvaluator } from '../../../src/modules/utils.js';

describe('sortEvaluator', () => {
    test.each([
        { arr1: ['a', 1], arr2: ['b', 2], expectedResult: -1 },
        { arr1: ['b', 2], arr2: ['a', 1], expectedResult: 1 },
        { arr1: ['a', 1], arr2: ['a', 2], expectedResult: 0 },
    ])('correctly orders $arr1 and $arr2', ({ arr1, arr2, expectedResult }) => {
        const output = sortEvaluator(arr1, arr2);
        expect(output).toBe(expectedResult);
    });
});

describe('keyValueString', () => {
    test.each([
        { input: {}, expectedResult: '' },
        { input: { a: 1 }, expectedResult: 'a=1' },
        { input: { b: 2, a: 1 }, expectedResult: 'a=1, b=2' },
        { input: { a: 2, b: 1 }, expectedResult: 'a=2, b=1' },
        { input: { c: 3, b: 2, a: 1 }, expectedResult: 'a=1, b=2, c=3' },
    ])('correctly constructs $expectedResult from $input', ({ input, expectedResult }) => {
        const output = keyValueString(input);
        expect(output).toBe(expectedResult);
    });
});
