(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['dataservice', '$timeout', 'config', 'logger'];
    /* @ngInject */
    function Shell(dataservice, $timeout, config, logger) {
        var vm = this;

        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;
        vm.tagline = {
            text: '',
            link: ''
        };

        activate();

        function activate() {
            dataservice.getLog().then(function(res) {
                if (res.count%3 === 0) {
                   // logger.logConsole();
                }
            });
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();
