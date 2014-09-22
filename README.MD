### Jump Start with Angular JS

Digging into Angular JS


**ngHide**: is a directive that shows or hides a given HTML element based on what is been provided by the ngHide attribute


<span>Hide:</span> <input type="checkbox" data-ng-model="isHidden"><br>

<div data-ng-hide="isHidden">
<span>Name:</span> <input type="text" ng-model="name" />{{name}}</div>

The HTML element is shown or hidden by removing or adding a ‘ng-hide’ CSS class onto the element. The CSS class sets the element display to none using an !important flag.

