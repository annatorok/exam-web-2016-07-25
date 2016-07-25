'use strict';

var sendButton = document.querySelector('.send-message-button');
var textarea = document.querySelector('.text-to-decode-area');
var shiftInputField = document.querySelector('.number-input-field');
var message = document.querySelector('p');


var domElements = (function () {

  function displayMessage(response) {
    var result = JSON.parse(response)
    if (result.text) {
      message.innerHTML = 'Result message: ' + result.text;
    } else {
      message.innerHTML = result.error
      alert('Shift is out of bound');
    }
  }

  function notLoadedYet() {
    document.querySelector('.loading').style.display = "block";
  }

  function loaded() {
    document.querySelector('.loading').style.display = "none";
  }

  return {
    displayMessage: displayMessage,
    notLoadedYet: notLoadedYet,
    loaded: loaded
  }

})();
