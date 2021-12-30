import { Version } from '../../../src/modules/versionPart';

describe('Version', () => {
    describe('constructor', () => {
        test('with default original', () => {
            const version = new Version({ a: 1 });
            expect(version.original).toBe(null);
        });
    });
});
