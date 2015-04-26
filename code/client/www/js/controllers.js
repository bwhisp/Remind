angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('LoginCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SignupCtrl', function($scope) {

})
.controller('TasksCtrl', function($scope) {
	
})

.controller('ListTasksCtrl', function($scope) {
	
})



;
