(function() {
    'use strict';

    angular.module('d3-item-manager').controller('ConfigController', ConfigController);

    function ConfigController($location, gameModes, columns) {
        var vm = this;
        vm.gameModes = gameModes;
        vm.addNewGameMode = addNewGameMode;

        vm.columns = columns;
        vm.addNewColumn = addNewColumn;

        vm.dismiss = dismiss;

        function addNewGameMode() {
            gameModes.add(vm.newGameMode);
            vm.newGameMode = '';
        }

        function addNewColumn() {
            columns.add(vm.newColumn);
            vm.newColumn = '';
        }

        function dismiss() {
            $location.path('/');
        }
    }

})();