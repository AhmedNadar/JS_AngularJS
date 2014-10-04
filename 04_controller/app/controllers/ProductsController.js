function ProductsController($scope){
	$scope.sortBy = 'name';
	$scope.reverse = false;
	$scope.products=[
									{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
									{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
									{name: 'Shirt', origin: 'Franc', price: '20.819', created_at: '2014-06-28'},
									{name: 'Phone', origin: 'Finland', price: '374.386', created_at: '2014-07-22'},
									{name: 'Car', origin: 'Germany', price: '8796.9399', created_at: '2013-12-30'},
									{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
	$scope.doSort = function(name){
		$scope.sortBy = $scope.name;
		$scope.reverse = !$scope.reverse;
	}									
}	