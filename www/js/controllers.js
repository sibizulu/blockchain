angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, AccountServe, HistoryServe) {
  $scope.profile = AccountServe.get("88882576");
  $scope.history = HistoryServe.all();
  $scope.toggleGroup = function(item) {
    item.show = !item.show;
  };
  $scope.isGroupShown = function(item) {
    return item.show;
  };
  $scope.doRefresh = function(){
    $scope.profile = AccountServe.get("88882576");
    $scope.history = HistoryServe.all();
    $scope.$broadcast('scroll.refreshComplete');
  }
})
.controller('AccountCtrl', function($scope, $state, AccountServe) {
  $scope.profile = AccountServe.get("88882576");
  $scope.logout = function (){
    window.localStorage.removeItem("username");
    $state.go("login");
  }
})
.controller('HistoryCtrl', function($scope, $cordovaBarcodeScanner) {
  $cordovaBarcodeScanner.scan().then(function(imageData) {
      if (imageData.format == "QR_CODE") {
        if (!imageData.cancelled) {
          var Web3 = require('web3');
          var web3 = new Web3();
          web3.setProvider(new web3.providers.HttpProvider('http://192.168.27.101:8545'));
          web3.eth.sendTransaction({
            from: '0x66b1bad13e3708f6a3beb418de1422cf582e3d97',
            to: '0x38ec0bb24ff247452e7d3d1d5eadc2a9f5fd4a06',
            value: web3.toWei(imageData.text, "ether")
          });
          //$state.go("tab.dash");
        }
      }
  }, function(error) {
      console.log("Try Again");
  });
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
        if (imageData.format == "QR_CODE") {
          if (!imageData.cancelled) {
            var Web3 = require('web3');
            var web3 = new Web3();
            web3.setProvider(new web3.providers.HttpProvider('http://192.168.27.101:8545'));
            web3.eth.sendTransaction({
              from: '0x66b1bad13e3708f6a3beb418de1422cf582e3d97',
              to: '0x38ec0bb24ff247452e7d3d1d5eadc2a9f5fd4a06',
              value: web3.toWei(imageData.text, "ether")
            });
            //$state.go("tab.dash");
          }
        }
    }, function(error) {
        console.log("Try Again");
    });
  };
})

.controller('LoginCtrl', function($scope, $ionicLoading, $state) {
  $scope.user = {username:"88882576", password: "123456789"};
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Secure login. Please wait....</p><ion-spinner icon="lines"></ion-spinner>',
      hideOnStateChange: true
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.goDash = function(milliseconds) {
    $scope.hide($ionicLoading);
    $state.go("tab.dash");
  };
  $scope.LogIn = function(user){
    $scope.show($ionicLoading);
    window.localStorage.setItem("username",user.username);
    setTimeout($scope.goDash, 1000);
   };
});
