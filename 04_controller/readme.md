### COntroller

* Is the brain for giving view.
* Responsible for processing business logic, grapping data (model) and pro forming other operation.
* Graps data and store in $scope.
* After it gets data from the model it needs to store these data before communicate with the view, where $scope comes into play, which act like the middle man, or the intermediator.


### $scope 
* The $scope is injected automatically by AngularJS into the controller.
* As part of the controller it will have properties for the data that we want expose to the view.
* View needs the $scop to interacte with controller when it comes data biding.
* When uisng Model View View Model MVVM pattern, the VM means views data or model which is the $scop.
* Act as the glow between the controller and the view.
* $scope handle the VM capabilities, it provide the data to what the view is going to render using some of directives.