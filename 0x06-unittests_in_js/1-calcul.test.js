const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("SUM", 6, 7);
      assert.strictEqual(res, 13);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("SUBTRACT", 6.4, 5.4);
      assert.strictEqual(res, 1);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("SUBTRACT", 9.1, 3.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("DIVIDE", 8, 4);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("DIVIDE", 7.1, 0);
      assert.strictEqual(res, "Error");
    });
    it(`checking if numbers are rounded`, function() {
      const res = calculateNumber("DIVIDE", 4.4, 0.6);
      assert.strictEqual(res, 4);
    });
});
