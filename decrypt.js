'use strict';

var CeasarDecryptFunctions = (function () {
  function errorHandling (err) {
    if (err) {
      console.log(err);
      return;
    }}

  function decode(text, shift) {
    var output = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        var charCode = text.charCodeAt(i);
        if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 - shift % 26) + 26) % 26 + 65);
        } else if ((charCode >= 97) && (charCode <= 122)) {
          char =
          String.fromCharCode(((charCode - 97 - shift % 26) + 26) % 26 + 97);
        }
      }
      output += char;
  }
  return output
  }

  function shiftMessage(text, shift, callback) {
    var decodeResult = decode(text,shift);
    if (shift >= -25 && shift <= 25 && text !== '' && shift !== '') {
    callback(null, {
      'status': 'ok',
      'text': decodeResult
    });
  } else {
    callback({
      'status': 'error',
      'error': 'Shift is out of bound'
    });
  }
};
  return {
    decode: decode,
    shiftMessage: shiftMessage
  }
})();

module.exports = CeasarDecryptFunctions;
