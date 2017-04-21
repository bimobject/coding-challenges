(function() {
    'use strict';

    angular
        .module('app.tasks')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'task',
                config: {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>',
                    url: '/tasks'
                }
            },
            {
                state: 'task.one',
                config: {
                    url: '/one',
                    templateUrl: 'app/tasks/task-one.html',
                    controller: 'TaskOne',
                    controllerAs: 'vm',
                    title: 'First Challenge',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-group"></i> Task 1'
                    }
                }
            },
            {
                state: 'task.two',
                config: {
                    url: '/two',
                    templateUrl: 'app/tasks/task-two.html',
                    controller: 'TaskTwo',
                    controllerAs: 'vm',
                    title: 'Second Challenge',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-group"></i> Task 2'
                    }
                }
            },
            {
                state: 'task.todo',
                config: {
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-group"></i> Task 3'
                    }
                }
            },
            {
                state: 'task.four',
                config: {
                    url: '/four',
                    templateUrl: 'app/tasks/task-four.html',
                    controller: 'TaskFour',
                    controllerAs: 'vm',
                    title: 'Fourth Challenge',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-group"></i> Task 4'
                    }
                }
            }
        ];
    }
})();
