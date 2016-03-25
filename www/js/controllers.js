angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {
  $scope.counter = 10;
  $scope.onTimeout = function(){
      $scope.counter += Math.floor((Math.random()*6)+1);
      mytimeout = $timeout($scope.onTimeout,3000);
  }
  var mytimeout = $timeout($scope.onTimeout,3000);
})

.controller('ChatsCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, $ionicLoading, $state) {
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
  })

.controller('AccountCtrl', function($scope, $state) {

  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function (){
    window.localStorage.removeItem("username");
    $state.go("login");
  }

});
