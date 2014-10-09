### Controller

* Is the brain for giving view.
* Responsible for processing business logic, grabing data (model) and pro forming other operation.
* Grabs data and store in $scope.
* After it gets data from the model it needs to store these data before communicate with the view, where $scope comes into play, which act like the middle man, or the intermediator.


### $scope 
* Is injected automatically by AngularJS into the controller.
* As part of the controller it will have properties for the data that we want expose to the view.
* View needs the $scope to interact with controller when it comes data biding.
* When using Model View View Model MVVM pattern, the VM means views data or model which is the $scope.
* Act as the glow between the controller and the view.
* Handles the VM capabilities, it provide the data to what the view is going to render using some of directives.


### Module
* Is like container for many thing such as Controllers, directives, filters, factory, routes, … etc
* Declare a Module could be done at the <html> tag level such as:
`<html data-ng-app=“moduleName”>`.
* Create a module could be done using `angular.module()` such as `var productApp = angular.module(‘productApp’, []);`. As you can see here we had to add the empty [] for an array. The reason for that is referencing any dependencies such as other external modulars.
`var productApp = angular.module(‘productApp’, [‘contactModule']);`
Now our `prodcutApp` module have access to all functions and features that are part of `contactModule`.

### Controller into a Module

There are few ways of declare a controller and add it into a Module.

- Before that here is how we create a controller and call it without a Module

**ProductsController.js**

```
	function ProductsController($scope){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.products=[
			{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
			{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
			{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		}									
	}	
```

**index.html**

Using the `ng-controller` directive we can access the controller functions.

```
<body data-ng-controller="ProductsController">
``` 

*** Options to add Controller into a Module***
 
#### 1. Adding controller into a module using global variable
- Within my module file `app.js` I create a new module as global variable, `var prodApp = angular.module('prodcutsApp', []);` and within my controller `ProductsController.js` file I  define my controller under the module.

```
	prodApp.controller('ProductsController', function ProductsController($scope){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.products=[
			{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
			{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
			{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};									
	}());
``` 

- The only one thing here that I shouldn't do is declare the module as a global variable. Therefor lets see another way.

#### 2. Adding controller into a module by declaring a function
- Within my module file `app.js` I create a new module as anonymous function:
```
(function (){
	var prodApp = angular.module('prodcutsApp', []);
}());
```
and within my controller `ProductsController.js` I surround my module with anonymous function, and define my module using `anguale.module` function and pass my controller.
```
(function () {
	angular.module('prodcutsApp').controller('ProductsController', function ProductsController($scope){
			$scope.sortBy = 'name';
			$scope.reverse = false;
			$scope.products=[
				{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
				{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
				{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};									
	});
}());
```
- As you can see the code above is noisy and not clear. I create a module ,a controller and pass the controller in the same line and all chained together. I'd rather keep my code clean and readable, which is the coming method.

#### 3. Adding controller into a module by writing my JS code first then plug it into Angular
- We will follow the same way from option 2, where we create a new module as anonymous function:
```
(function (){
	var prodApp = angular.module('prodcutsApp', []);
}());
```
and within my controller `ProductsController.js` within an anonymous function, I focus on writing my controller first, and define my module using `anguale.module` function and call my controller. 

```
(function () {
	// define my controller first before hock it into angular
	var ProductsController = function ProductsController($scope){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.products=[
			{name: 'Watch', origin: 'Switzerland', price: '129.899', created_at: '2014-03-12'},
			{name: 'Headphone', origin: 'UK', price: '89.135', created_at: '2014-03-12'},
			{name: 'Computer', origin: 'Canada', price: '958.192', created_at: '2014-08-23'} ]
		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};
	};
	
    // Define function dependencies using the array notation
	ProductsController.$inject = ['$scope'];
	// access my controller from my my module
	angular.module('prodcutsApp').controller('ProductsController', ProductsController);
}());
```
This is good code, isn't it? First I focus on my controller before hock it into AngularJS, therefor it's more readable and clean. Next define my controller's dependencies which now is `$scope` by injecting it/them into the controller. Lastly I create my module and from there I access my controller. 

- As you can see we are invoking the `$inject` property on our function/controller `ProductsController`, and passing the dependencies or values as stings using the array notation.

My preferred and way to go of creating a module is the last one where my code is clean and easy to read.
