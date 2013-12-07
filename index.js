/**
 * External dependencies.
 */

var Formatter = require('hydro-formatter');

/**
 * Simple formatter.
 *
 * @constructor
 */

var Simple = Formatter.extend();

/**
 * After all tests.
 *
 * @api public
 */

Simple.prototype.afterAll = function() {
  this.displayResult();
  this.displayFailed();
};

/**
 * Primary export.
 */

module.exports = Simple;
