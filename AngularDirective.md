## Angular Custom Directive

[JSBin Demo for Delete Button](https://jsbin.com/bocixa/edit?html,js,output)

[Official Documentation](https://docs.angularjs.org/guide/directive)

Custom directives are used in AngularJS to extend the functionality of HTML. Custom directives are defined using "directive" function. A custom directive simply replaces the element for which it is activated. AngularJS application during bootstrap finds the matching elements and do one time activity using its compile() method of the custom directive then process the element using link() method of the custom directive based on the scope of the directive. AngularJS provides support to create custom directives for following type of elements.

- Element directives − Directive activates when a matching element is encountered.
- Attribute − Directive activates when a matching attribute is encountered.
- CSS − Directive activates when a matching css style is encountered.
- Comment − Directive activates when a matching comment is encountered.


### Best Practices
- Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option. (Create your own folder for each directive)
- When should I use an attribute versus an element? Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality.
- Use the scope option to create isolate scopes when making components that you want to reuse throughout your app.
- Normally, a scope prototypically inherits from its parent. An isolated scope does not. See the ["Directive Definition Object - scope"](https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object) section for more information about isolate scopes.
- Directives should clean up after themselves. You can use element.on('$destroy', ...) or scope.$on('$destroy', ...) to run a clean-up function when the directive is removed.
- Only use transclude: true when you want to create a directive that wraps arbitrary content.
- Use &attr in the scope option when you want your directive to expose an API for binding to behaviors.


### [Tutorial](http://www.tutorialspoint.com/angularjs/angularjs_custom_directives.htm)
- Quick overview from [W3School](http://www.w3schools.com/angular/angular_directives.asp)
- Use the [**Hello-World** setup](https://jsbin.com/bocixa/1/edit?html,js,output) to start your custom directive journey 

### Manipulates the DOM and Handle Events 
Directives that want to modify the DOM typically use the link option to register DOM listeners as well as update the DOM. It is executed after the template has been cloned and is where directive logic will be put.

link takes a function with the following signature, function link(scope, element, attrs, controller, transcludeFn) { ... }, where:

scope is an Angular scope object.
element is the jqLite-wrapped element that this directive matches.
attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
controller is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
transcludeFn is a transclude linking function pre-bound to the correct transclusion scope.


### Transclude 
We've seen that you can pass in models to a directive using the isolate scope, but sometimes it's desirable to be able to pass in an entire template rather than a string or an object. Let's say that we want to create a "dialog box" component. The dialog box should be able to wrap any arbitrary content.

Transclude makes the contents of a directive with this option have access to the scope outside of the directive rather than inside.

The transclude option changes the way scopes are nested. It makes it so that the contents of a transcluded directive have whatever scope is outside the directive, rather than whatever scope is on the inside. In doing so, it gives the contents access to the outside scope.

```js
angular.module('docsTransclusionDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.name = 'Tobias';
}])
.directive('myDialog', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-dialog.html'
  };
});
```

& binding allows a directive to trigger evaluation of an expression in the context of the original scope, at a specific time. Any legal expression is allowed, including an expression which contains a function call. Because of this, & bindings are ideal for binding callback functions to directive behaviors.


### [& ,  @ ,  = in angularJS](http://stackoverflow.com/questions/14908133/what-is-the-difference-between-vs-and-in-angularjs)



