(function () {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskThree', TaskThree);

    TaskThree.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskThree(dataservice, logger) {
        var vm = this;

        activate();

        function activate() {
            dataservice.getPackageJson().then(function (res) {
                vm.packageJsonData = res;
            }).catch(function (err) {
                vm.packageJsonData = 'err fetching file: ' + err;
            });
        }
    }
})();
