const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("SUM", 6, 4)).to.equal(10);
	});
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("SUM", 6.7, 2.1)).to.equal(9);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("SUBTRACT", 7.1, 2.9)).to.equal(4);
	});
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("SUBTRACT", 4.4, 2.2)).to.equal(2);
	});
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("SUBTRACT", -0.9, -1.7)).to.equal(1);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("DIVIDE", 10, 3)).to.equal(3.3333333333333335);
	});
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("DIVIDE", 4.2, 1.0)).to.equal(4.0);
	});
	it("checking if numbers are rounded", function() {
	    expect(calculateNumber("DIVIDE", 0, 0)).to.equal("Error");
	});
    });
});