'use strict';

/**
 * @ngdoc function
 * @name angularVideoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularVideoApp
 */
angular.module('angularVideoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
