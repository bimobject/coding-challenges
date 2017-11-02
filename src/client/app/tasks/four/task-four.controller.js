(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskFour', TaskFour);

    TaskFour.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskFour(dataservice, logger) {
        var vm = this;
        vm.showInput = false;
        vm.toggleInstructions = toggleInstructions;
        vm.title = 'Task 4';

        activate();

        function activate() {
            dataservice.getInput().then(function(data) {
                vm.input = data;
            });
        }

        function toggleInstructions() {
            vm.showInput = !vm.showInput;
        }
    }

})();
