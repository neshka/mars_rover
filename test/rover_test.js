'use strict'

const chai = require('chai')
const expect = chai.expect
const rover = require("../app/rover");

describe('Rover', function() {
  it('should exist', function() {
      var rover = require("../app/rover");
      expect(rover).to.not.be.undefined;
  });

  it('should create rover object', function() {
    var rover1 = new rover.Rover(0,0,'N');
    expect(rover1.direction).equal('N');
  });


});