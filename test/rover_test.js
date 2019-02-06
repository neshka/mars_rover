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

  it('object rover should be able to move', function() {
    var rover1 = new rover.Rover(0,0,'N');
    rover1.move();
    expect(rover1.positionY).equal(1);
  });

  it('object rover should be able to turn left', function() {
    var rover1 = new rover.Rover(0,0,'N');
    rover1.turnLeft();
    expect(rover1.direction).equal('W');
  });

  it('object rover should be able to turn right', function() {
    var rover2 = new rover.Rover(0,0,'N');
    rover2.turnRight();
    expect(rover2.direction).equal('E');
  });
});