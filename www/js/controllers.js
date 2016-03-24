angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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
