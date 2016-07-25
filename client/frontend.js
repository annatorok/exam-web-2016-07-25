'use strict';

sendButton.addEventListener('click', addMessage);

function addMessage() {
  readRequest.httpRequest('POST', local, JSON.stringify({text: textarea.value, shift: shiftInputField.value}), function (response) {
    domElements.displayMessage(response);
  })
};
