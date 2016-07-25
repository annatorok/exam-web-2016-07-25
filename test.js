'use strict';

var tape = require('tape');
var decrypt = require('./decrypt');

tape('positiv shift with all data', function (t) {
  t.deepEqual(decrypt.decode('oruhp lsvxp groru vlw', 3), ('lorem ipsum dolor sit'));
  t.end();
});

tape('negativ shift with all data', function (t) {
  t.deepEqual(decrypt.decode('oruhp lsvxp groru vlw', 3), ('lorem ipsum dolor sit'));
  t.end();
});

tape('no shift with data', function (t) {
  t.deepEqual(decrypt.decode('lorem ipsum dolor sit', 0), ('lorem ipsum dolor sit'));
  t.end();
});

tape('positiv shift with special characters', function (t) {
  t.deepEqual(decrypt.decode('*)', 2), ('*)'));
  t.end();
});
