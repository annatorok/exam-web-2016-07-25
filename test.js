'use strict';

var tape = require('tape');
var decrypt = require('./decrypt');

tape(function (t) {
    t.deepEqual(decrypt.decode('oruhp lsvxp groru vlw', 3), ('lorem ipsum dolor sit'));
    t.end();
});

tape(function (t) {
    t.deepEqual(decrypt.decode('lorem ipsum dolor sit', 0), ('lorem ipsum dolor sit'));
    t.end();
});

tape(function (t) {
    t.deepEqual(decrypt.decode('*)', 2), ('*)'));
    t.end();
});
