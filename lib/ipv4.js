/* ================================================================
 * ipv4 by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Jun 04 2014 12:33:02 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

"use strict";

var os = require('os');
var util = require('xutil');

/**
 * get ipv4
 */

function getIpv4() {
  var networkInterfaces = os.networkInterfaces();
  var ipv4 = null;
  util.each(networkInterfaces,function(networkInterface){
    networkInterface.forEach(function (network) {
      if (network.family === 'IPv4' && !network.internal) {
        ipv4 = network.address;
        return;
      }
    });
  });
  return ipv4;
};

module.exports = getIpv4();

