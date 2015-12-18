(function() {
    'use strict';

    angular
        .module('app')
        .factory('DataActions', DataActions);

    DataActions.$inject = ['$localStorage'];

    function DataActions($localStorage) {

      return {
      	save: function(data) {
      		$localStorage.data = data;
      	}
      };
    }

})();