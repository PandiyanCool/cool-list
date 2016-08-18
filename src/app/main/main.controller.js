(function () {
  'use strict';

  angular
    .module('toDo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $firebaseObject, $firebaseAuth, $mdSidenav) {
    var vm = this;

    var config = {
      apiKey: "AIzaSyBSiqipUqwijvCtWF_aahOEo-8onavV5tQ",
      authDomain: "cool-list-3ccf6.firebaseapp.com",
      databaseURL: "https://cool-list-3ccf6.firebaseio.com",
      storageBucket: "cool-list-3ccf6.appspot.com",
    };
    var mainApp = firebase.initializeApp(config);
    var rootRef = firebase.database().ref();

    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    //$scope.data = $firebaseObject(ref);

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1470402545723;
    vm.showToastr = showToastr;
    vm.login = login;
    vm.appUserName;
    vm.isLoggedIn = false;

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

    function login() {
      auth.$signInWithPopup("facebook").then(function (firebaseUser) {
        console.log("Signed in as:", firebaseUser);
        vm.appUserName = firebaseUser.user.displayName;
        vm.isLoggedIn = true;
      }).catch(function (error) {
        console.log("Authentication failed:", error);
      });
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
