/* ================================================================
 * ipv4 by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Jun 04 2014 12:33:02 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

"use strict";

var ipv4 = require('../');

describe('It works', function(){
  it('at local', function() {
    ipv4.should.not.equal('0.0.0.0')
  });
});
