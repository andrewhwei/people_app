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
      if ($scope.newName) {
        $scope.people.push({name: name, bio: bio, bioVisible: false});
        $scope.newName = null;
        $scope.newBio = null;
      }
    }

    $scope.deletePerson = function(index) {
      $scope.people.splice(index, 1);
    }

    window.$scope = $scope;
  });
}());