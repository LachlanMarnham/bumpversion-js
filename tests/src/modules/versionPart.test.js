import { Version, PartConfiguration } from '../../../src/modules/versionPart';
import { NumericFunction, ValuesFunction } from '../../../src/modules/functions.js';
import { jest } from '@jest/globals';

const mockBump = jest.fn();
const mockFirstValueToString = jest.fn();
const mockOptionalValueToString = jest.fn();
const mockFunctionCls = jest.fn().mockImplementation(() => {
    return {
        bump: mockBump,
        firstValue: {
            toString: mockFirstValueToString,
        },
        optionalValue: {
            toString: mockOptionalValueToString,
        },
    };
});

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mockFunctionCls.mockClear();
    mockBump.mockClear();
    mockFirstValueToString.mockClear();
    mockOptionalValueToString.mockClear();
});

describe('PartConfiguration', () => {
    describe('constructor', () => {
        test('correctly sets function', () => {
            new PartConfiguration(mockFunctionCls, 'param1', 'param2');
            expect(mockFunctionCls).toHaveBeenCalledWith('param1', 'param2');
            expect(mockFunctionCls).toHaveBeenCalledTimes(1);
        });
    });

    describe('firstValue', () => {
        test('toString called correctly', () => {
            const config = new PartConfiguration(mockFunctionCls, 'param1', 'param2');
            mockFirstValueToString.mockReturnValueOnce('rVal');
            const rval = config.firstValue;
            expect(mockFirstValueToString).toHaveBeenCalledWith();
            expect(mockFirstValueToString).toHaveBeenCalledTimes(1);
            expect(rval).toBe('rVal');
        });
    });

    describe('optionalValue', () => {
        test('toString called correctly', () => {
            const config = new PartConfiguration(mockFunctionCls, 'param1', 'param2');
            mockOptionalValueToString.mockReturnValueOnce('rVal');
            const rval = config.optionalValue;
            expect(mockOptionalValueToString).toHaveBeenCalledWith();
            expect(mockOptionalValueToString).toHaveBeenCalledTimes(1);
            expect(rval).toBe('rVal');
        });
    });

    describe('bump', () => {
        test('with default value', () => {
            const config = new PartConfiguration(mockFunctionCls, 'param1', 'param2');
            mockBump.mockReturnValueOnce('bumpedVal');
            const bumpedVal = config.bump();
            expect(mockBump).toHaveBeenCalledWith(null);
            expect(mockBump).toHaveBeenCalledTimes(1);
            expect(bumpedVal).toBe('bumpedVal');
        });

        test('with non-default value', () => {
            const config = new PartConfiguration(mockFunctionCls, 'param1', 'param2');
            mockBump.mockReturnValueOnce('bumpedVal');
            const bumpedVal = config.bump('param');
            expect(mockBump).toHaveBeenCalledWith('param');
            expect(mockBump).toHaveBeenCalledTimes(1);
            expect(bumpedVal).toBe('bumpedVal');
        });
    });
});

describe('Version', () => {
    describe('constructor', () => {
        test('with default original', () => {
            const version = new Version({ a: 1 });
            expect(version.original).toBe(null);
        });
    });
});
