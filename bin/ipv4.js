'use strict';

var chalk = require('chalk');
var copy = require('copy-paste').copy;

var ipv4 = require('..');

copy(ipv4, function() {
  console.log('Your ip is: '+ chalk.cyan(ipv4) +' which was in your clipboard.');
});
