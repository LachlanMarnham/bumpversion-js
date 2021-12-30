import { NumericFunction, ValuesFunction } from './functions.js';

class PartConfiguration {
    constructor(functionCls, ...args) {
        this.function = new functionCls(...args);
    }

    get firstValue() {
        return this.function.firstValue.toString();
    }

    get optionalValue() {
        return this.function.optionalValue.toString();
    }

    bump(value = null) {
        return this.function.bump(value);
    }
}

class ConfiguredVersionPartConfiguration extends PartConfiguration {
    constructor(values, optionalValue = null, firstValue = null) {
        super(ValuesFunction, values, optionalValue, firstValue);
    }
}

class NumericVersionPartConfiguration extends PartConfiguration {
    constructor(firstValue = null) {
        super(NumericFunction, firstValue);
    }
}

class VersionPart {
    // TODO: requires NumericVersionPartConfiguration and ConfiguredVersionPartConfiguration
}

class Version {
    #values;
    constructor(values, original = null) {
        // TODO values has type Dict[str, VersionPart]. Need to write
        // VersionPart to get this.bump to work, and update tests for
        // constructor
        this.#values = values;
        this.original = original;
    }
}

function labelsForFormat() {}

class VersionConfig {
    // TODO: requires Version, VersionPart, labels_for_format
}

export { Version, labelsForFormat, VersionConfig };
