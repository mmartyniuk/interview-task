(function() {
    'use strict';

  angular
      .module('app')
      .controller('PaymentsCtrl', PaymentsCtrl);

      PaymentsCtrl.$inject = ['DataActions'];

  function PaymentsCtrl(DataActions) {
    
    // defining that we will use "ctrl as"/this syntax
    var vm = this;

    vm.validateData = validateData;
    vm.save = save;

    // info about user will be stored here
    vm.userInfo = {};

    function validateData() {
      if (true) {
        return true;
      } else {
        return false;
      }
    }

    function save() {
      if (vm.validateData) {
        DataActions.save(userInfo);
      } else {
        return false;
      }
    }

    /*activate();

    function activate() {

    }*/
  }

})();