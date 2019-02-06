'use strict'

const chai = require('chai')
const expect = chai.expect
const rover = require("../app/rover");

describe('Rover', function() {
  it('should exist', function() {
      var rover = require("../app/rover");
      expect(rover).to.not.be.undefined;
  });
});