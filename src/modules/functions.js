import { ValueError } from './errors.js';

// TODO clear up error message
class ValuesFunction {
  #values;
  constructor(values, optionalValue=null, firstValue=null) {

    if (!values.length) {
        throw new ValueError('Version part values cannot be empty')
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
        throw new ValueError(`First value ${firstValue} must be included in values [${values}]`)
    }
    this.firstValue = firstValue;
  }

  bump(value) {
      if (!this.#values.includes(value)) {
          throw new ValueError(`Value ${value} is not in the allowed values [${this.#values}]`);
      }

      let newValIndex = this.#values.indexOf(value) + 1;
      if (newValIndex === this.#values.length) {
          throw new ValueError(`The part has already the maximum value among [${this.#values}] and cannot be bumped.`)
      }
      return this.#values[newValIndex];
  }
}

function sum(a, b) {
    return a + b;
}

export { ValuesFunction, sum };
