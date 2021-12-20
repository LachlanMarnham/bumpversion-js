import { ValuesFunction } from '../../../src/modules/functions.js';
import { ValueError } from '../../../src/modules/errors.js';

describe('ValuesFunction', () => {
    describe('constructor', () => {

        test("non-default optionalValue and firstValue", () => {
            const optionalValue = 2;
            const firstValue = 3;
            const valuesFunction = new ValuesFunction(
                [1, 2, 3],
                optionalValue,
                firstValue
            );
            expect(valuesFunction.optionalValue).toBe(optionalValue);
            expect(valuesFunction.firstValue).toBe(firstValue);
        });

        test("default firstValue", () => {
            const optionalValue = 2;
            const valuesFunction = new ValuesFunction(
                [1, 2, 3],
                optionalValue,
            );
            expect(valuesFunction.optionalValue).toBe(optionalValue);
            expect(valuesFunction.firstValue).toBe(1);
        });

        test("default optionalValue and firstValue", () => {
            const valuesFunction = new ValuesFunction([1,2,3]);
            expect(valuesFunction.optionalValue).toBe(1);
            expect(valuesFunction.firstValue).toBe(1);
        });

        test("raises when values is empty", () => {
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
    })

    describe('bump', () => {
        test.todo("raises if current value not in array");
        test.todo("raises if maximum value exceeded");
        test.todo("bumps to next value successfully");
    })
})