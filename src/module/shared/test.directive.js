'use strict'

function AcTestDirective ($log) {
  return {
    restrict: 'A',
    scope: {
    },
    link: (scope, element, attrs) => {
      $log.debug('AcTestDirective link func called')
    },
    controller: ($scope, $http) => {
    },
    controllerAs: 'vm',
    bindToController: true
  }
}

angular.module('angularjsCommon')
  .directive('acTestDirective', AcTestDirective)
