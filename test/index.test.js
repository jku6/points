
// import {expect} from 'chai';

// import { checkPosition, outDirectionString, testIt } from '../lib/name';
var expect = require('chai').expect;  
// var Camo = require('camo');  
var testMe = require("../lib/index.js");

var testArray = ['5x5','(1,2)'];
var wrongArray = ['5x', '(1,2)'];

var gridCorrect = ['5x5','(1,2)'];
var gridWrong = ['5x5','(6,6)'];

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


