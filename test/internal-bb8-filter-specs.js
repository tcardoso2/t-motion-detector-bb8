  /*****************************************************
 * Internal tests
 * What are internal tests?
 * As this is a npm package, it should be tested from
 * a package context, so I'll use "interal" preffix
 * for tests which are NOT using the npm tarball pack
 * For all others, the test should obviously include
 * something like:
 * var md = require('t-motion-detector');
 *****************************************************/

var chai = require('chai');
//var chaiAsPromised = require("chai-as-promised");
var should = chai.should();
var fs = require('fs');
var vermon = require('vermon');
var ent = require('../Entities');
var main = require('../main.js');
var events = require('events');
var sphero = require('sphero');

//Chai will use promises for async events
//chai.use(chaiAsPromised);

before(function(done) {
  done();
});

after(function(done) {
  // here you can clear fixtures, etc.
  done();
});

describe("When a new BB8Filter is created, ", function() {
  it('should inherit the Filter class', function() {
    let f = new ent.BB8Filter();
    (f instanceof vermon.Filters.BaseFilter).should.equal(true);
  });
  xit('should be able to add into the config file', function(done) {
    vermon.use(main);
    vermon.configure();
    vermon.watch().then((e,d,n,f) => {
      (f[0] instanceof ent.BB8Filter).should.equal(true);
      done();
    });
  });
});