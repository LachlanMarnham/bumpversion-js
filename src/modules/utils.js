function keyValueString(obj) {
    // Creates a comma-seperated string containing items like <key>=<value> for each
    // <key> and <value> in obj. The items in the resulting string are lexicographically
    // sorted by key. Examples:
    //      keyValueString({}) === '';
    //      keyValueString({a: 1}) === 'a=1';
    //      keyValueString({b: 2, a: 1}) === 'a=1, b=2';
    const objEntries = Object.entries(obj);
    const sortedEntries = objEntries.sort((arr1, arr2) => {
        if (arr1[0] < arr2[0]) {
            return -1;
        } else if (arr1[0] > arr2[0]) {
            return 1;
        } else {
            return 0;
        }
    });
    const keyValItems = sortedEntries.map((arr) => `${arr[0]}=${arr[1]}`);
    return keyValItems.join(', ');
}

export { keyValueString };
