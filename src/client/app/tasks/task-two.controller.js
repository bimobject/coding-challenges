(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskTwo', TaskTwo);

    TaskTwo.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskTwo(dataservice, logger) {
        var vm = this;
        vm.problem2Solved = problem2Solved;

        activate();

        function activate(){
            return dataservice.getTaskTwo().then(function(data){
                vm.checkBoxes = data;
                return vm.checkBoxes;
            });
        }
        function problem2Solved(){
            logger.success('Hurray!', '');
        }
    }

})();
