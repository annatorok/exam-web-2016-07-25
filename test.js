'use strict';

var tape = require('tape');
var decrypt = require('./decrypt');

tape('test with positiv shift with all data', function (t) {
  t.deepEqual(decrypt.decode('oruhp lsvxp groru vlw', 3), 'lorem ipsum dolor sit' );
  t.end();
});

tape('test with negativ shift with all data', function (t) {
  t.deepEqual(decrypt.decode('oruhp lsvxp groru vlw', 3), 'lorem ipsum dolor sit');
  t.end();
});

tape('test with no shift with all data', function (t) {
  t.deepEqual(decrypt.decode('lorem ipsum dolor sit', 0), 'lorem ipsum dolor sit');
  t.end();
});

tape('test with positiv shift with special characters', function (t) {
  t.deepEqual(decrypt.decode('*)', 2), '*)');
  t.end();
});
