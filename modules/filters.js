angular.module('snipFilters', []).filter('slugify', function () {
    return function (input) {
        return input.toLowerCase().replace(/[^a-z0-9_]+/g, '-');
    };
});
