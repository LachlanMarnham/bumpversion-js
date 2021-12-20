// import { sum } from '../../../src/modules/errors';
const sum = require('../../../src/modules/functions');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });