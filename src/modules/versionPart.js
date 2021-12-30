class ConfiguredVersionPartConfiguration {
    // TODO requires PartConfiguration
}

class NumericVersionPartConfiguration {
    // TODO requires PartConfiguration
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
