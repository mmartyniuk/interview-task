(function () {
  'use strict';

  angular
    .module('app')
    .controller('PaymentsCtrl', PaymentsCtrl);

  PaymentsCtrl.$inject = ['DataActions', '$localStorage', '$scope'];

  function PaymentsCtrl(DataActions, $localStorage, $scope) {
    
    // defining that we will use "ctrl as"/this syntax
    var vm = this;

    vm.save = save;
    vm.expirationMonthData = DataActions.getMonths();
    vm.expirationYearData = DataActions.getYears();
    // vm.allFieldsFilled = allFieldsFilled;
    console.log($localStorage.data);

    // info about user will be stored here if there is no data to fill into the page
    vm.userInfo = $localStorage.data || {};

    // haven't found how to make static radio button in angular material checked by default
    // so that I had to use this temporary hack
    if (!vm.userInfo.address) {
      vm.userInfo.address = 'current';
    }

    function save() {
      if ($scope.userRegistration.$valid) {
        DataActions.save(vm.userInfo);
      }
    }
  }

})();