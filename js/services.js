'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Movie', ['$resource',
	function($resource){
		//*
		return $resource('http://angular.github.io/angular-phonecat/step-11/app/phones/:phoneId.json', {}, {
			query: {method:'GET', params:{phoneId:'phones',test:"testing"}, isArray:true}
		});
		//*/
		/*
		return $resource('https://ext.kinopoisk.ru/android/2.3.0/getKPGenresView', {}, {
			query: {method:'GET', params:{key:'81b0523a32094abd8348eddfb95558ca'}, isArray:true}
		});
		//*/
		/*
		return $resource('https://api.getevents.co/event', {}, {
			query: {method:'GET', params:{lat:'41.904196',lng:'12.465974'}, isArray:true}
		});
		//*/

	}]);

phonecatServices.factory('Genres', ['$resource',
	function($resource){
		return $resource('https://ext.kinopoisk.ru/android/2.3.0/getKPGenresView', {}, {
			query: {method:'GET', params:{key:'81b0523a32094abd8348eddfb95558ca'}, isArray:true}
		});
	}]);