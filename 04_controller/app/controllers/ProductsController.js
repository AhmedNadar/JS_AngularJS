//// declear controller and call it from index page without adding to a module
	// function ProductsController($scope){
	// 	$scope.sortBy = 'name';
	// 	$scope.reverse = false;
	// 	$scope.products=[
	// 									{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
	// 									{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
	// 									{name: 'Shirt', origin: 'Franc', price: '20.819', created_at: '2014-06-28'},
	// 									{name: 'Phone', origin: 'Finland', price: '374.386', created_at: '2014-07-22'},
	// 									{name: 'Car', origin: 'Germany', price: '8796.9399', created_at: '2013-12-30'},
	// 									{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
	// 	$scope.doSort = function(propName){
	// 		$scope.sortBy = propName;
	// 		$scope.reverse = !$scope.reverse;
	// 	}									
	// }	

//// Option 1, Adding controller into a module using global var
	// prodApp.controller('ProductsController', function ProductsController($scope){
	// 	$scope.sortBy = 'name';
	// 	$scope.reverse = false;
	// 	$scope.products=[
	// 									{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
	// 									{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
	// 									{name: 'Shirt', origin: 'Franc', price: '20.819', created_at: '2014-06-28'},
	// 									{name: 'Phone', origin: 'Finland', price: '374.386', created_at: '2014-07-22'},
	// 									{name: 'Car', origin: 'Germany', price: '8796.9399', created_at: '2013-12-30'},
	// 									{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
	// 	$scope.doSort = function(propName){
	// 		$scope.sortBy = propName;
	// 		$scope.reverse = !$scope.reverse;
	// 	};									
	// });

//// Option 2, Adding controller into a module using function
	// (function () {
	// 	angular.module('prodcutsApp')
	// 		.controller('ProductsController', function ProductsController($scope){
	// 			$scope.sortBy = 'name';
	// 			$scope.reverse = false;
	// 			$scope.products=[
	// 											{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
	// 											{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
	// 											{name: 'Shirt', origin: 'Franc', price: '20.819', created_at: '2014-06-28'},
	// 											{name: 'Phone', origin: 'Finland', price: '374.386', created_at: '2014-07-22'},
	// 											{name: 'Car', origin: 'Germany', price: '8796.9399', created_at: '2013-12-30'},
	// 											{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
	// 			$scope.doSort = function(propName){
	// 				$scope.sortBy = propName;
	// 				$scope.reverse = !$scope.reverse;
	// 			};									
	// 	});
	// }());

//// Option 3, Adding controller into a module by writing my JS code first then plug it into Angular 

	(function () {
		var ProductsController = function ProductsController($scope){
			$scope.sortBy = 'name';
			$scope.reverse = false;

			$scope.products=[
											{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
											{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
											{name: 'Shirt', origin: 'Franc', price: '20.819', created_at: '2014-06-28'},
											{name: 'Phone', origin: 'Finland', price: '374.386', created_at: '2014-07-22'},
											{name: 'Car', origin: 'Germany', price: '8796.9399', created_at: '2013-12-30'},
											{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};
		};
	  // Define function dependencies using the array notation
		ProductsController.$inject = ['$scope'];

	angular.module('prodcutsApp').controller('ProductsController', ProductsController);
	}());