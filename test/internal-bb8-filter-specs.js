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
var logger = vermon.logger;
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
  it('should be able to add into the config file', function(done) {
    vermon.Utils.setLevel('debug');
    vermon.use(main);
    vermon.configure('test/config_local1.js');
    vermon.watch().then((data) => {
      (data.filters == undefined).should.equal(false);
      data.filters.length.should.equal(1);
      (data.filters[0] instanceof ent.BB8Filter).should.equal(true);
      done();
    });
  });
});