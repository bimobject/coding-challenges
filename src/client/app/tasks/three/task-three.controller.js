(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskThree', TaskThree);

    TaskThree.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskThree(dataservice, logger) {
        var vm = this;
        
        activate();

        function activate(){
            dataservice.getBowerJson().then(function(res){
                vm.bowerJsonData = res;
            }).catch(function(err) {
                vm.bowerJsonData = 'err fetching file: ' + err;
            });
        }
    }
})();
