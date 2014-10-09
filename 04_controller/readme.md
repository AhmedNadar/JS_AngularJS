### Controller

* Is the brain for giving view.
* Responsible for processing business logic, grapping data (model) and pro forming other operation.
* Graps data and store in $scope.
* After it gets data from the model it needs to store these data before communicate with the view, where $scope comes into play, which act like the middle man, or the intermediator.


### $scope 
* Is injected automatically by AngularJS into the controller.
* As part of the controller it will have properties for the data that we want expose to the view.
* View needs the $scop to interacte with controller when it comes data biding.
* When uisng Model View View Model MVVM pattern, the VM means views data or model which is the $scop.
* Act as the glow between the controller and the view.
* Handles the VM capabilities, it provide the data to what the view is going to render using some of directives.


### Module
* Is like container for many thing such as Controllers, directives, filters, factory, routes, ….
* Declare a Module could be done at the <html> tag level such as:
`<html data-ng-app=“moduleName”>`.
* Create a module could be done using `angular.module()` such as `var productApp = angular.module(‘productApp’, []);`. As you can see here we had to add the empty [] for an array. The reason for that is referencing any dependencies such as other external modulars.
`var productApp = angular.module(‘productApp’, [‘contactModule']);`
Now our `prodcutApp` module have access to all functions and features that are part of `contactModule`.
*  
