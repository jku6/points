var expect = require('chai').expect;  
var testMe = require("../lib/index.js");

var testArray = ['5x5','(1,2)'];
var wrongArray = ['5x', '(1,2)'];

var gridCorrect = ['5x5','(1,2)'];
var gridWrong = ['5x5','(6,6)'];

var prevPosition = '(1,2)';
var currentPosition = '(3,4)';


describe('checkPosition', function() {
	it('should work!', function() {
		expect(testMe.checkPosition(prevPosition,currentPosition)).to.eql(['E','E','N','N','D']);
	});

	it('should not work!', function() {
		expect(testMe.checkPosition(prevPosition,currentPosition)).to.not.eql(['E','E','N','D','D']);
	});
});

describe('gridCorrect', function() {
  it('should work!', function() {
    expect(testMe.gridCorrect(testArray)).to.be.true;
  });

  it('should not work!', function() {
    expect(testMe.gridCorrect(wrongArray)).to.be.false;
  });
});

describe('pointsWithinGrid', function() {
  it('should work!', function() {
    expect(testMe.pointsWithinGrid(gridCorrect)).to.be.true;
  });

  it('should not work!', function() {
    expect(testMe.pointsWithinGrid(gridWrong)).to.be.false;
  });
});


