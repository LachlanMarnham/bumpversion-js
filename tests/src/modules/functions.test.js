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
    });
});

describe('NumericFunction', () => {
    describe('constructor', () => {
        // if firstValue not provided, this.firstValue = this.optionalValue = '0';
        test.todo('default firstValue');

        // if first value is eg 'rc-129-asdfasdf3', firstValue = optionalValue = 'rc-129-asdfasdf3';
        test.todo('non-default firstValue');

        // if first value doesn't contain a number, throws ValueError
        test.todo('raises if firstValue contains no digit');
    });

    describe('bump', () => {
        test('bumps to next value successfully', () => {
            const numericFunction = new NumericFunction('rc-1-adsf');
            expect(numericFunction.bump('rc-1-adsf')).toBe('rc-2-adsf');
        });
    });
});
