var Firebase = require('firebase');
var Vue = require('vue');

var iomante = new Firebase('https://iomante.firebaseio.com/');

var startTemplate = require('html!./templates/start.html');

new Vue({
  el: '.app-container',
  template: startTemplate,
  data: {
    email: '',
    password: ''
  },
  methods: {
    login: function() {
      iomante.authWithPassword({
        email    : this.email,
        password : this.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

    }
  }
});