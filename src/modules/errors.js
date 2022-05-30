class BumpVersionError extends Error {
    // A custom base class for all project-specific errors
}

class IncompleteVersionRepresentationError extends BumpVersionError {}

class InvalidVersionPartError extends BumpVersionError {}

class MissingValueForSerializationError extends BumpVersionError {}

class ValueError extends BumpVersionError {}

class TypeError extends BumpVersionError {}

export {
    IncompleteVersionRepresentationError,
    InvalidVersionPartError,
    MissingValueForSerializationError,
    ValueError,
    TypeError,
};
