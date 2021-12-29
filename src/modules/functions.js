import { ValueError } from './errors.js';

class NumericFunction {
    FIRST_NUMERIC = /([^\d]*)(\d+)(.*)/;

    constructor(firstValue = null) {
        if (firstValue !== null) {
            let result = firstValue.match(this.FIRST_NUMERIC);
            if (result === null) {
                throw new ValueError(`The given first value ${firstValue} does not contain any digit`);
            }
        } else {
            firstValue = 0;
        }

        this.firstValue = firstValue.toString();
        this.optionalValue = this.firstValue;
    }

    bump(value) {
        let result = value.match(this.FIRST_NUMERIC);
        let partPrefix = result[1];
        let partNumeric = result[2];
        let partSuffix = result[3];
        let bumpedNumeric = parseInt(partNumeric) + 1;

        return [partPrefix, bumpedNumeric, partSuffix].join('');
    }
}


// TODO clear up error messages
class ValuesFunction {
    #values;
    constructor(values, optionalValue = null, firstValue = null) {
        if (!values.length) {
            throw new ValueError('Version part values cannot be empty');
        }
        this.#values = values;

        if (optionalValue === null) {
            optionalValue = values[0];
        }
        if (!values.includes(optionalValue)) {
            throw new ValueError(`Optional value ${optionalValue} must be included in values [${values}]`);
        }
        this.optionalValue = optionalValue;

        if (firstValue === null) {
            firstValue = values[0];
        }
        if (!values.includes(firstValue)) {
            throw new ValueError(`First value ${firstValue} must be included in values [${values}]`);
        }
        this.firstValue = firstValue;
    }

    bump(value) {
        if (!this.#values.includes(value)) {
            throw new ValueError(`Value ${value} is not in the allowed values [${this.#values}]`);
        }

        let newValIndex = this.#values.indexOf(value) + 1;
        if (newValIndex === this.#values.length) {
            throw new ValueError(`The part has already the maximum value among [${this.#values}] and cannot be bumped.`);
        }
        return this.#values[newValIndex];
    }
}

export { NumericFunction, ValuesFunction };
