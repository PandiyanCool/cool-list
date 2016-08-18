(function () {
    'use strict';

    angular
        .module('toDo')
        .directive('todoSidebar', todoSidebar);

    function todoSidebar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/sidebar/sidebar.html',
            scope: {
                creationDate: '='
            },
            controller: SidebarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function SidebarController(moment) {
            var vm = this;
            vm.sidebar = "Sidebar";
        }
    }
})();