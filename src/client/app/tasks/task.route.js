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
                    url: '/tasks',
                    absract: true,
                    template: '<ui-view class="shuffle-animation"/>'
                }
            },
            {
                state: 'task.one',
                config: {
                    url: '/one',
                    templateUrl: 'app/tasks/one/task-one.html',
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
                    templateUrl: 'app/tasks/two/task-two.html',
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
                state: 'task.three',
                config: {
                    url: '/three',
                    templateUrl: 'app/tasks/three/task-three.html',
                    controller: 'TaskThree',
                    controllerAs: 'vm',
                    title: "Third challenge",
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
                    templateUrl: 'app/tasks/four/task-four.html',
                    controller: 'TaskFour',
                    controllerAs: 'vm',
                    title: 'Fourth Challenge',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-group"></i> Task 4 (optional)'
                    }
                }
            },
            {
                state: 'task.five',
                config: {
                    url: '/five',
                    templateUrl: 'app/tasks/five/task-five.html',
                    controller: 'TaskFive',
                    controllerAs: 'vm',
                    title: 'Fifth Challenge',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-group"></i> Task 5'
                    }
                }
            }            
        ];
    }
})();
