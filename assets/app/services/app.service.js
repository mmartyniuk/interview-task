(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataActions', DataActions);

    DataActions.$inject = ['$localStorage'];

    function DataActions($localStorage) {

        return {
            save: function (data) {
                $localStorage.data = data;
            },
            get: function () {
                return $localStorage.data;
            },
            getMonths: function () {
                return [
                    { 'number': '1' },
                    { 'number': '2' },
                    { 'number': '3' },
                    { 'number': '4' },
                    { 'number': '5' },
                    { 'number': '6' },
                    { 'number': '7' },
                    { 'number': '8' },
                    { 'number': '9' },
                    { 'number': '10' },
                    { 'number': '11' },
                    { 'number': '12' }
                ];
            },
            getYears: function () {
                return [
                    { 'number': '15' },
                    { 'number': '16' },
                    { 'number': '17' },
                    { 'number': '18' },
                    { 'number': '19' },
                    { 'number': '20' },
                    { 'number': '21' },
                    { 'number': '22' },
                    { 'number': '23' },
                    { 'number': '24' }
                ];
            }
        };
    }

})();