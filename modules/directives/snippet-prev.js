angular.module("snipDirectives", []).directive('snippetPrev', function () {
    'use strict';

    return {
        restrict: 'E',
        templateUrl: 'views/directives/snippet-prev.html',
        transclude: true,
        scope: {
            snippet: '=',
            load: '&'
        }
    };

});
