import { keyValueString } from '../../../src/modules/utils.js';

describe('keyValueString', () => {
    test.each([
        { input: {}, output: '' },
        { input: { a: 1 }, output: 'a=1' },
        { input: { a: 1, b: 2 }, output: 'a=1, b=2' },
        { input: { a: 1, b: 2, c: 3 }, output: 'a=1, b=2, c=3' },
    ])('correctly constructs $output from $input', ({ input, output }) => {
        expect(keyValueString(input)).toBe(output);
    });
});
