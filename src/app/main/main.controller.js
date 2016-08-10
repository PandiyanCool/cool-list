(function () {
  'use strict';

  angular
    .module('toDo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $firebaseObject) {
    var vm = this;

    // var ref = firebase.database().ref();

    // vm.databaseInfo = $firebaseObject(ref);
    // console.log(vm.databaseInfo);

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1470402545723;
    vm.showToastr = showToastr;

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
