'use strict';

angular.module('portfolio').factory('Websites', [
  function() {
    var getPortfolio = [
      {
        id: 1,
        title: 'Tiny Chat',
        keywords: 'angular, gulp, protractor',
        img: 'modules/websites/img/puppy1.jpg',
        github: 'https://github.com/jrogozen/aero',
        description: 'Frontend implementation of a simple chat application. Backend API calls are mocked with Angular $timeout and imitate a deferral/promise response from server. End to end testing using protractor and task building with Gulp.'
      },
      {
        id: 2,
        title: 'Drinks',
        keywords: 'angular, gulp, protractor, jasmine, mocha, express',
        img: 'modules/websites/img/puppy2.jpg',
        github: 'https://github.com/jrogozen/drinks',
        description: 'Game + Player randomizer w/ rewards. Node/Express backend API coupled with MongoDB. Angular frontend styled with Bootstrap. Protractor, Jasmine, Karma, and Mocha test suite.'
      },
      {
        id: 3,
        title: 'E-Commerce',
        keywords: 'angular',
        img: 'modules/websites/img/puppy3.jpg',
        github: 'https://github.com/jrogozen/practice',
        description: 'Frontend implementation of simple e-commerce website. Draws streaming JSON data from mocked backend and displays results in Angular frontend. Features infinite scrolling and preemptive caching.'
      },
      {
        id: 4,
        title: 'Loltrackr',
        keywords: 'rails, angular, youtube api, twitch api, riot games api',
        img: 'modules/websites/img/puppy4.jpg',
        github: 'https://github.com/jrogozen/loltrackr',
        url: 'http://loltrackr.com',
        description: 'Videogame movie/stream database powered by Ruby on Rails backend API and Angular frontend. Features video control, Youtube integration, Twitch API, Riot Games API, and Algorithm-based team builder.'
      },
      {
        id: 5,
        title: 'Papalote',
        keywords: 'rails, node, angular, socket.io',
        img: 'modules/websites/img/puppy5.jpg',
        github: 'https://github.com/jrogozen/papalote',
        url: 'http://code.mks.io',
        description: 'Code editor that utilizes websockets to allow realtime collaboration. Node chat, Rails backend, Postgres, and Angular frontend.'
      },
      {
        id: 6,
        title: 'Metube',
        keywords: 'jquery, rails',
        img: 'modules/websites/img/puppy6.jpg',
        github: 'https://github.com/jrogozen/metube',
        description: 'Youtube clone built with Ruby on Rails and jQuery. Features autocomplete, Youtube API, and AJAX based commenting system.'
      },
      {
        id: 7,
        title: 'Cuppr',
        keywords: 'Angular, Firebase, AngularFire',
        img: 'modules/websites/img/puppy7.jpg',
        github: 'https://github.com/pdadhaniya/cupper',
        description: 'Realtime King\'s Cup. Add players, share unique url, and play an online game of Kings Cup with friends. Made with Firebase backend and Angular frontend.'
      }
    ];
    return {
      get: getPortfolio
    };
  }
]);