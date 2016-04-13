// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services','starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    },
    cache: false
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  if (typeof window.localStorage.getItem("username") !== 'undefined'
      && window.localStorage.getItem("username") !== null){
    $urlRouterProvider.otherwise('/tab/dash');
  } else {
    $urlRouterProvider.otherwise('/login');
  }


});
