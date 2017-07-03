'use strict';

var network = require('os').networkInterfaces();

for (var n in network) {
  var ipv4 = network[n].filter(function(i) {
    return i.family === 'IPv4' && !i.internal;
  });

  if (ipv4.length) {
    module.exports = ipv4[0].address;
    return;
  }
}

// Fallback
module.exports = '0.0.0.0';
