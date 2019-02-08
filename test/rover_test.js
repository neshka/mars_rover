'use strict'

const chai = require('chai')
const expect = chai.expect
const rover = require("../app/rover");

describe('Rover', function() {

  it('should exist', function() {
      var rover = require("../app/rover");
      expect(rover).to.not.be.undefined;
  });

  it('object rover is initialised correctly', function() {
    var plateau = new rover.Plateau(5,5);
    var rover1 = new rover.Rover(0,0,'N', plateau);
    expect(rover1.direction).equal('N');
    expect(rover1.positionX).equal(0);
    expect(rover1.positionY).equal(0);
  });

  it('object rover should be able to move and direction stays the same', function() {
    var plateau = new rover.Plateau(5,5);
    var rover1 = new rover.Rover(0,0,'N', plateau);
    rover1.move();
    expect(rover1.positionY).equal(1);
    expect(rover1.direction).equal('N');
  });

  //change initial direction, move and check if direction is correct
  //Input:
  //5 5
  //1 2 N LMLMLMLMM
  //Output: 1 3 N
  it('Rover1', function() {
    var plateau = new rover.Plateau(5,5);
    var rover1 = new rover.Rover(1,2,'N', plateau);
    rover1.turnLeft();
    rover1.move();
    rover1.turnLeft();
    rover1.move();
    rover1.turnLeft();
    rover1.move();
    rover1.turnLeft();
    rover1.move();
    rover1.move();
    expect(rover1.positionX).equal(1);
    expect(rover1.positionY).equal(3);
    expect(rover1.direction).equal('N');
  });

  //Input:
  //5 5
  //3 3 E MMRMMRMRRM
  //Output:
  //5 1 E
  it('Rover2', function() {
    var plateau = new rover.Plateau(5,5);
    var rover2 = new rover.Rover(3,3,'E', plateau);
    rover2.move();
    rover2.move();
    rover2.turnRight();
    rover2.move();
    rover2.move();
    rover2.turnRight();
    rover2.move();
    rover2.turnRight();
    rover2.turnRight();
    rover2.move();
    expect(rover2.positionX).equal(5);
    expect(rover2.positionY).equal(1);
    expect(rover2.direction).equal('E');
  });




  //change for E, S, W, N again and move and see if direction is correct

  //invalid moves - errors

  it('object rover should not be able to move', function() {
    var plateau = new rover.Plateau(5,5);
    var rover1 = new rover.Rover(9,9,'N', plateau);
    console.log(rover1.direction);
    expect(rover1.move()).to.throw(Error);
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

  it('plateau should have X', function() {
    var plateau = new rover.Plateau(10,10);
    expect(plateau.sizeX).equal(10);
    expect(plateau.sizeY).equal(10);
  });

  it('plateau should have X', function() {
    var plateau = new rover.Plateau(5,5);
    expect(plateau.sizeX).equal(5);
    expect(plateau.sizeY).equal(5);
  });

});