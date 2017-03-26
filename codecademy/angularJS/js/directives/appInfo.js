// appInfo.js

app.directive('appInfo', //setting element
 function(){
  return {
    restrict: 'E', //means new HTML element
    scope: {
      info: '=' //specifies info is passed into this directive through an attribute named info.
    },			// = tells the directive to look for an attribute named info in the <app-info> element
    templateUrl: 'js/directives/appInfo.html' // specifies the HTML to use in order to display the data in scope.info
  };
});