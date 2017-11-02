(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',
        'app.widgets',

        /* Feature areas */
        'app.dashboard',
        'app.tasks',
        'app.layout'
    ]);

})();
