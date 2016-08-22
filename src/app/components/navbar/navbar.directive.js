(function () {
  'use strict';

  angular
    .module('toDo')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $mdSidenav, $firebaseObject, $firebaseAuth) {
      var vm = this;
      vm.toggleLeft = buildToggler('left');
      vm.login = login;
      vm.appUserName;
      vm.isLoggedIn = false;

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
      function login() {
        auth.$signInWithPopup("google").then(function (firebaseUser) {
          console.log("Signed in as:", firebaseUser);
          vm.appUserName = firebaseUser.user.displayName;
          vm.isLoggedIn = true;
        }).catch(function (error) {
          console.log("Authentication failed:", error);
        });
      }

      function buildToggler(componentId) {
        return function () {
          $mdSidenav(componentId).toggle();
        }
      }

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
