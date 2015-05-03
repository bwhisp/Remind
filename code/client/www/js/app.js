// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "views/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tab-tasks': {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })
  .state('tab.task-detail', {
    url: '/tasks/:taskId',
    views: {
      'tab-tasks': {
        templateUrl: 'views/task-detail.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.mytasks', {
    url: '/mytasks',
    views: {
      'tab-mytasks': {
        templateUrl: 'views/mytasks.html',
        controller: 'TasksCtrl'
      }
    }
  })
  .state('tab.newtask', {
    url: '/mytasks/newtask',
    views: {
      'tab-mytasks': {
        templateUrl: 'views/newtask.html',
        controller: 'TasksCtrl'
      }
    }
  })
  .state('tab.edittask', {
    url: '/mytasks/:taskId/edit',
    views : {
      'tab-mytasks': {
        templateUrl : 'views/edittask.html',
        controller: 'TasksCtrl'
      }
    }
  })


  .state('tab.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('tab.signup', {
    url: '/signup',
    views: {
      'tab-login': {
        templateUrl: 'views/signup.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  .state('tab.edituser', {
    url: '/profile/edit',
    views: {
      'tab-profile': {
        templateUrl: 'views/edituser.html',
        controller: 'ProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/tasks');

});
