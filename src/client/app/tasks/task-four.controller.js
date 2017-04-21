(function() {
    'use strict';

    angular
        .module('app.tasks')
        .controller('TaskFour', TaskFour);

    TaskFour.$inject = ['dataservice', 'logger'];
    /* @ngInject */
    function TaskFour(dataservice, logger) {
        var vm = this;
        vm.title = 'Task 4';
        
        activate();

        function activate() {
            search().then(function() {
                logger.info('An artist was fetched successfully');
            });
        }

        function search(){
            return dataservice.getAlbums(vm.searchText)
                .then(function(response){
                    vm.albumList = response.data.albums.items;
                    return vm.albumList;
                }).catch(function(err){
                    logger.error('woops');
                });
        }
    }

})();
