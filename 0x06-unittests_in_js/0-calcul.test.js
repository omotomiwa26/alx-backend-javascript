const assert = require('assert');
const { it, describe } = require('mocha')
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(4, 1);
    assert.strictEqual(res, 5);
  });
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(4.5, 3.2);
    assert.strictEqual(res, 8);
  });
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(6.4, 2.1);
    assert.strictEqual(res, 8);
  });
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(0.1, 0.4);
    assert.strictEqual(res, 0);
  });
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(-1.3, -2.7);
    assert.strictEqual(res, -4);
  });
  it(`checking if number is rounded`, function() {
    const res = calculateNumber(1.7, -3.1);
    assert.strictEqual(res, -1);
  });
    it(`checking if number is rounded`, function() {
      const res = calculateNumber(-1.5, 0.1);
      assert.strictEqual(res, -1.4);
  });
});
