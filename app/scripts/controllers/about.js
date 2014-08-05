'use strict';

/**
 * @ngdoc function
 * @name angularVideoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularVideoApp
 */
angular.module('angularVideoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
