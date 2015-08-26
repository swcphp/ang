'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
	'ngRoute',
	'phonecatControllers',
	'phonecatFilters',
	'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/phones', {
					templateUrl: 'main-list.html',
					controller: 'MovieListCtrl'
				}).
				when('/phones/:phoneId', {
					templateUrl: 'main-detail.html',
					controller: 'MovieDetailCtrl'
				}).
				otherwise({
					redirectTo: '/phones'
				});
		}]
);

phonecatApp.directive('ajax', function () {
	return {
		restrict: 'EA',
		replace: 'true',
		transclude: true,
		scope: {
			ajaxurl: '@'
		},
		template: '<div class="ajax">' +
		'<iframe ng-src="{{ ajaxurl }}"></iframe>' +
		'</div>'
		/*,
		link: function (scope, el, attr) {
			el.find("iframe")[0].onload = function () {
				scope["onIframeLoaded"]();
			};
		}
		,
		controller: function ($scope) {
			$scope["onIframeLoaded"] = function () {
				console.log($scope);
				// Do whatever you need to do after the iframe has loaded
			};
		}*/
	}
});