angular.module('starter.services', [])

.factory('Logger', function ($http) {
  var logger = {};

  var username = "";
  var user = {};

  logger.doLogin = function (email, pass, callback) {
    var req = {
      method : 'GET',
      url : 'http://akammous.rmorpheus.enseirb.fr/Remind/login',
      headers : {
        'Content-Type' : undefined,
      },
      data : {
        'email' : email,
        'pass' : hashPassword(pass)
      }
    }

    $http(req).success( function (data, status) {
      callback(data, "Success");
    }).error ( function (data, status) {
      callback(data, "Error");
    })
  };

  logger.doSignup = function (user, callback) {
    var req = {
      method : 'POST',
      url : 'http://akammous.rmorpheus.enseirb.fr/Remind/user',
      headers : {
        'Content-Type' : undefined,
      },
      data : {
        'username' : user.username,
        'firstName' : user.firstName,
        'lastName' : user.lastName,
        'email' : user.email,
        'pass' : user.hashPassword(pass)
      }
    }

    $http(req).success( function (data, status) {
      callback(data, "Success");
    }).error ( function (data, status) {
      callback(data, "Error");
    })
  };

  logger.doLogout = function () {
    username = "";
    name = "";
  };

  logger.setUsername = function (name) {
    username = name;
  };

  logger.setUser = function (userObj) {
    user = userObj;
  };

  logger.getUsername = function () {
    return username;
  };

  logger.getUser = function () {
    return user;
  };

  var hashPassword = function (pass) {
    var salt = "C3rV3@ù";    
    return sha1(sha1(pass)+salt);
  };

  return logger;
})

.factory('Loader', function ($http, $ionicLoading) { 
  var loader = {};

  loader.loadAllTasks = function (callback) {

    var req = {
      method : 'GET',
      url : 'http://akammous.rmorpheus.enseirb.fr/Remind/tasks',
      headers : {
        'Content-Type' : undefined,
      },
      data : {

      }
    }
    $ionicLoading.show();
    $http(req).success( function (data, status) {
      callback(data, "Success");
      $ionicLoading.hide();
    }).error ( function (data, status) {
      callback(data, "Error");
      $ionicLoading.hide();
    })
  };

  return loader;
})

.factory('Poster' , function ($http) {
  var poster = {};

  poster.postTask = function (newTask, callback) {
    var req = {
      method : 'POST',
      url : 'http://akammous.rmorpheus.enseirb.fr/Remind/tasks',
      headers : {
        'Content-Type' : undefined,
      },
      data : {
        owner : window.username,
        title : newTask.title,
        description : newTask.description,
        deadline : newTask.deadline
      }
    };

    $http(req).success( function (data, status) {
      callback(data, "Success");
    }).error ( function (data, status) {
      callback(data, "Error");
    });
  };

  poster.editTask = function () {

  };

  poster.editProfile = function () {

  };

  return poster;
});