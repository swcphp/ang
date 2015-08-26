'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('MovieListCtrl', ['$scope', 'Movie', 'Genres', '$http',
	function($scope, Movie, Genres, $http) {

		$scope.get = function() {
			$http.get("https://ext.kinopoisk.ru/android/2.3.0/getKPGenresView?&key=81b0523a32094abd8348eddfb95558ca").success(function(result) {
				console.log("Success", result);
				$scope.result = result;
			}).error(function() {
				console.log("error");
			});
		};
		//$scope.genre = Genres.query();
		console.log($scope);
		$scope.phones = Movie.query();
		console.log($scope.phones);
		$scope.orderProp = 'age';

	}]);

phonecatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
	function($scope, $routeParams, Movie) {
		$scope.phone = Movie.get({phoneId: $routeParams.phoneId}, function(phone) {

			phone.images.forEach(function(item, i) {
				phone.images[i] = 'http://angular.github.io/angular-phonecat/step-11/app/' + phone.images[i];
			});
			$scope.mainImageUrl = phone.images[0];
		});

		$scope.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
		};
	}]);