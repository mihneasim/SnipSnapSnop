angular.module('snipApp').controller('SnipsController',
    function SnipsController ($scope, $firebase, $stateParams, $location) {
        "use strict";
         var fireUrl = "https://intense-heat-6269.firebaseio.com",
             fire = new Firebase(fireUrl + "/snippets"),
             sync = $firebase(fire);

         $scope.snippet = {};
         $scope.snippets = sync.$asArray();

         $scope.load = function (snipId) {
             console.log("load", snipId);
            $location.path("detail/" + snipId);
         }

         $scope.create = function() {
            $scope.snippets.$add($scope.snippet).then(
                function (ref) {
                    var snipId = ref.key();
                    $scope.snippet = {};
                    // redirect to new snippet
                    $location.path("detail/" + snipId);
                },
                function (reason) {
                    console.log("there's trouble in the model", reason);
                }
            );
         }

         $scope.loadDetail = function () {

            var snippetId = $stateParams.snippetId,
                fireObject = new Firebase(fireUrl + "/snippets/" + snippetId),
                syncObject = $firebase(fireObject),
                snippetObject = syncObject.$asObject();

            snippetObject.$loaded().then(function() {
                    $scope.viewSnippet = snippetObject;
                },
                function (reason) {
                    console.log("there's trouble in the model", reason);
                }
            );
         }
    });
