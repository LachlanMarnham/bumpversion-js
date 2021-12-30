import { NumericFunction, ValuesFunction } from '../../../src/modules/functions.js';
import { ValueError } from '../../../src/modules/errors.js';

describe('ValuesFunction', () => {
    describe('constructor', () => {
        test('non-default optionalValue and firstValue', () => {
            const optionalValue = 2;
            const firstValue = 3;
            const valuesFunction = new ValuesFunction([1, 2, 3], optionalValue, firstValue);
            expect(valuesFunction.optionalValue).toBe(optionalValue);
            expect(valuesFunction.firstValue).toBe(firstValue);
        });

        test('default firstValue', () => {
            const optionalValue = 2;
            const valuesFunction = new ValuesFunction([1, 2, 3], optionalValue);
            expect(valuesFunction.optionalValue).toBe(optionalValue);
            expect(valuesFunction.firstValue).toBe(1);
        });

        test('default optionalValue and firstValue', () => {
            const valuesFunction = new ValuesFunction([1, 2, 3]);
            expect(valuesFunction.optionalValue).toBe(1);
            expect(valuesFunction.firstValue).toBe(1);
        });

        test('raises when values is empty', () => {
            expect(() => {
                new ValuesFunction([]);
            }).toThrowError(ValueError);
        });

        test("raises when values doesn't contain optionalValue", () => {
            expect(() => {
                new ValuesFunction([1, 2, 3], 4, 3);
            }).toThrowError(ValueError);
        });

        test("raises when values doesn't contain firstValue", () => {
            expect(() => {
                new ValuesFunction([1, 2, 3], 3, 4);
            }).toThrowError(ValueError);
        });
    });

    describe('bump', () => {
        test('raises if current value not in array', () => {
            expect(() => {
                const valuesFunction = new ValuesFunction([1, 2, 3], 1, 2);
                valuesFunction.bump(4);
            }).toThrowError(ValueError);
        });

        test('raises if maximum value exceeded', () => {
            expect(() => {
                const valuesFunction = new ValuesFunction([1, 2, 3], 1, 2);
                valuesFunction.bump(3);
            }).toThrowError(ValueError);
        });

        test('bumps to next value successfully', () => {
            const valuesFunction = new ValuesFunction([1, 2, 3], 1, 2);
            expect(valuesFunction.bump(1)).toBe(2);
        });

        test('bumps to next non-consecutive value successfully', () => {
            const valuesFunction = new ValuesFunction([0, 5, 10]);
            expect(valuesFunction.bump(0)).toBe(5);
        });
    });
});

describe('NumericFunction', () => {
    describe('constructor', () => {
        test('default firstValue', () => {
            const numericFunction = new NumericFunction();
            expect(numericFunction.firstValue).toBe('0');
            expect(numericFunction.optionalValue).toBe('0');
        });

        test('non-default firstValue', () => {
            const numericFunction = new NumericFunction('rc-1-adsf');
            expect(numericFunction.firstValue).toBe('rc-1-adsf');
            expect(numericFunction.optionalValue).toBe('rc-1-adsf');
        });

        // if first value doesn't contain a number, throws ValueError
        test('raises if firstValue contains no digit', () => {
            expect(() => {
                new NumericFunction('abc');
            }).toThrowError(ValueError);
        });
    });

    describe('bump', () => {
        test.each([
            { preBump: 'rc-1-adsf', postBump: 'rc-2-adsf' },
            { preBump: 'rc-1', postBump: 'rc-2' },
            { preBump: 'rc1adsf', postBump: 'rc2adsf' },
            { preBump: 'rc1', postBump: 'rc2' },
            { preBump: 'r3', postBump: 'r4' },
            { preBump: 'r3-001', postBump: 'r4-001' },
            { preBump: '0', postBump: '1' },
        ])('bumps $preBump to $postBump successfully', ({ preBump, postBump }) => {
            const numericFunction = new NumericFunction('rc-1-adsf');
            expect(numericFunction.bump(preBump)).toBe(postBump);
        });
    });
});
