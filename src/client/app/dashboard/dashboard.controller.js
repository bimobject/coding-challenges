(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$state', 'dataservice', 'logger'];
    function Dashboard($state, dataservice, logger) {
        var vm = this;
        vm.title = 'Dashboard';

        activate();

        function activate() {
            return getInstructions().then(function() {
                logger.info('Welcome!');
            });
        }

        function getInstructions() {
            return dataservice.getInstructions().then(function(data) {
                vm.instructions = data;
                return vm.instructions;
            });
        }

        function gotoTask(c) {
            $state.go('task.'+c.name);
        }
    }
})();
