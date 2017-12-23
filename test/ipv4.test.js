'use strict';

const ipv4 = require('..');
const assert = require('assert');
const validator = require('validator');

describe('test', () => {
  it('should be ok', () => {
    assert(validator.isIP(ipv4), true);
  });
});
