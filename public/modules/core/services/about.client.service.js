'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('core').factory('About', [
  function() {
    var blocks = [
      {
        title: 'Javascript',
        content: 'Angular, Node, jQuery, Underscore, Lodash, Express'
      },
      {
        title: 'Ruby',
        content: 'Rails, Sinatra, Pry, Devise, RSpec, Capybara'
      },
      {
        title: 'Databases',
        content: 'Relational or NoSQL. Postgres, MongoDB, Sqlite 3'
      },
      {
        title: 'Taskbuilder',
        content: 'Gulp for linting, injecting, live-reloading, compiling'
      },
      {
        title: 'Style',
        content: 'Bootstrap, Foundation, Sass'
      },
      {
        title: 'Git',
        content: 'Possible star showers over at Github'
      }
    ];

    return {
      blocks: blocks
    };
  }
]);