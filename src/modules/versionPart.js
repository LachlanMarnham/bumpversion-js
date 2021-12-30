import { NumericFunction, ValuesFunction } from './functions.js';

class PartConfiguration {
    functionCls;

    constructor(...args) {
        this.function = new this.functionCls(...args);
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
    functionCls = ValuesFunction;
}

class NumericVersionPartConfiguration extends PartConfiguration {
    functionCls = NumericFunction;
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
