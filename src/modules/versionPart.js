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

function* labelsForFormat(serializeFormat) {
    // Extracts field names from a format string. Fields are defined like ${fieldName}.
    // Examples:
    //      '${major}' -> ['major']
    //      '${major}.${minor}.${patch}-${label}' -> ['major', 'minor', 'patch', 'label']
    // Note: the serializeFormat is reminiscent of template literals, but it is a normal
    //       string (i.e. 'this' and not `this`).
    const fieldNamePattern = /\$\{([a-zA-Z]+)\}/g;
    let matches = serializeFormat.matchAll(fieldNamePattern);
    for (let match of matches) {
        yield match[1];
    }
}

class VersionConfig {
    // TODO: requires Version, VersionPart, labels_for_format
}

export {
    Version,
    labelsForFormat,
    VersionConfig,
    PartConfiguration,
    ConfiguredVersionPartConfiguration,
    NumericVersionPartConfiguration,
    VersionPart,
};
