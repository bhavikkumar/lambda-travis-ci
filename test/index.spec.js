'use strict';
const index = require('../src/index');

test('Function invoked', () => {
  expect(index.handler({})).toBe('Success');
});
