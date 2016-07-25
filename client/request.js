'use strict';

var local = 'http://localhost:3000/decode';

var readRequest = (function () {
  function httpRequest(method, url, data, callback) {
    domElements.notLoadedYet();
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      domElements.loaded();
      callback(xhr.response);
      }
    }
    xhr.send(data);
  };

  return {
    httpRequest: httpRequest
  }
})();
