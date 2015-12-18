(function() {
    'use strict';

  angular
      .module('app')
      .controller('PaymentsCtrl', PaymentsCtrl);

      PaymentsCtrl.$inject = ['InitialFactory'];

  function PaymentsCtrl(InitialFactory) {
    
    // defining that we will use "ctrl as"/this syntax
    var vm = this;

    vm.eng = 34;

    activate();

    function activate() {

    }
  }

})();