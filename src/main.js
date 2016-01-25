var Firebase = require('firebase');
var Vue = require('vue');

var startTemplate = require('html!./templates/start.html');

new Vue({
  el: '.app-container',
  template: startTemplate,
  data: {
    message: "HELLO"
  }
});