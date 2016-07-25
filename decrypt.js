'use strict';

var CeasarDecryptFunctions = (function () {
  function errorHandling (err) {
    if (err) {
      console.log(err);
      return;
    }}

  function shiftMessage(text, shift, callback) {
    if (shift < 0) {
      return shiftMessage(text, shift + 26);
    }
    var output = '';
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (char.match(/[a-zA-Z]/)) {
        var charCode = text.charCodeAt(i);
  			if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 - shift % 26) + 26) % 26 + 65);
        }
  			else if ((charCode >= 97) && (charCode <= 122)) {
          char =
String.fromCharCode(((charCode - 97 - shift % 26) + 26) % 26 + 97);
        }
  		}
  		output += char;
      }
      callback(output);
  }
    return {
      shiftMessage: shiftMessage
  }
})();

module.exports = CeasarDecryptFunctions;

// console.log(CeasarDecryptFunctions.shiftMessage('alma', 5));
