'use strict';

var sendButton = document.querySelector('.send-message-button');
var textarea = document.querySelector('.text-to-decode-area');
var shiftInputField = document.querySelector('.number-input-field');
var message = document.querySelector('p');


var domElements = (function () {

  function displayMessage(response) {
    console.log(response);
    message.innerHTML = '';
    message.innerHTML = response;
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
