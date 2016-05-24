(function() {
  "use strict";
  angular.module("app").controller("taskCtrl", function($scope) {
    $scope.people = [
      {
        name: "John",
        bio: "Hello my name is John.",
        bioVisible: false
      },
      {
        name: "Patty",
        bio: "I am from Argentina.",
        bioVisible: false
      }
    ];

    $scope.showBio = function(index) {
      $scope.people[index].bioVisible = !$scope.people[index].bioVisible;
    }

    $scope.addPerson = function(name, bio) {
      if ($scope.newTask) {
        $scope.tasks.push(task);
        $scope.newTask = null;
      }
    }

    // $scope.deleteTask = function(index) {
    //   $scope.tasks.splice(index, 1);
    // }

    // $scope.isPositive = function(task) {
    //   return task.indexOf("stupid") == -1;
    // }

    window.$scope = $scope;
  });
}());