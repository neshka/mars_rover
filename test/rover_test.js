'use strict'

const chai = require('chai')
const expect = chai.expect
const rover = require("../app/rover");

describe('Rover', function() {

  it('should exist', function() {
      var rover = require("../app/rover");
      expect(rover).to.not.be.undefined;
  });

  it('object rover should have direction', function() {
    var rover1 = new rover.Rover(0,0,'N');
    expect(rover1.direction).equal('N');
  });

  it('object rover should have positionX', function() {
    var rover1 = new rover.Rover(0,0,'N');
    expect(rover1.positionX).equal(0);
  });

  it('object rover should have positionY', function() {
    var rover1 = new rover.Rover(0,0,'N');
    expect(rover1.positionY).equal(0);
  });




});