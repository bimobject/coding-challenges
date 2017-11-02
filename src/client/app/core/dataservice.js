(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var readyPromise;

        var service = {
            getTaskOne: getTaskOne,
            getTaskTwo: getTaskTwo,
            getBowerJson: getBowerJson,
            getInstructions: getInstructions,
            getInput: getInput,

            ready: ready
        };

        return service;

        function getTaskOne(){
            var response = {
                first: "When clicked, I should become green and box B should become Red",
                second: "When clicked, I should become green and box A should become Blue"
            };
            return $q.when(response);
        }

        function getTaskTwo() {
            var checkBoxes = [
                {
                    "id": "1",
                    "label": "first"
                },{ 
                    "id": "2",
                    "label": "second"
                },{
                    "id": "3",
                    "label": "third"
                },{
                    "id": "4",
                    "label": "fourth"
                }
            ];
            return $q.when(checkBoxes);
        }

        function getBowerJson() {
            return $http.get('/api/files/bower')
                .then(success)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getBowerJson()')(message);
                    $location.url('/');
                });

            function success(data, status, headers, config) {
                return data.data;
            }
        }

        function getInstructions() {
            return $http.get('/api/instructions')
                .then(success)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getInstructions()')(message);
                    $location.url('/');
                });

            function success(data, status, headers, config) {
                return data.data;
            }
        }

        function getInput() {
            return $http.get('/api/tasks/input')
                .then(success)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getInput()')(message);
                    $location.url('/');
                });

            function success(response) {
                return response.data;
            }
        }

        function getReady() {
            if (!readyPromise) {
                readyPromise = $q.when(service);
            }
            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function() {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();
