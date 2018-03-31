'use strict';

module.exports = function ValidationError(message, extra) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.extra = extra;
  this.httpRespCode = 401;
};

require('util').inherits(module.exports, Error);
