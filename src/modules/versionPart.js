import { NumericFunction, ValuesFunction } from './functions.js';
import { TypeError } from './errors.js';

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
    // Represent part of a version number
    // Offer a this.config object that rules how the part behaves when increased
    // or reset
    #value;
    constructor(value, config = null) {
        this.#value = value;
        if (config === null) {
            config = new NumericVersionPartConfiguration();
        }
        this.config = config;
    }

    get value() {
        return this.#value || this.config.optionalValue;
    }

    get isOptional() {
        return this.value == this.config.optionalValue;
    }

    bump() {
        const nextValue = this.config.bump(this.value);
        return new VersionPart(nextValue, this.config);
    }

    isEqual(other) {
        if (!(other instanceof VersionPart)) {
            throw new TypeError(
                `${this.constructor.name}.isEqual does not support comparison with ${other.constructor.name}`,
            );
        }
        return this.value === other.value;
    }

    copy() {
        return new VersionPart(this.#value, this.config); // TODO should be this.config.copy()?
    }

    null() {
        return new VersionPart(this.config.firstValue, this.config);
    }
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
