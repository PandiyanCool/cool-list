(function () {
  'use strict';

  angular
    .module('toDo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope) {
    var vm = this;



    //$scope.data = $firebaseObject(ref);

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1470402545723;
    vm.showToastr = showToastr;


    vm.toggleLeft = buildToggler('left');

    function buildToggler(componentId){
      return function(){
        $mdSidenav(componentId).toggle();
      }
    }

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }


    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
