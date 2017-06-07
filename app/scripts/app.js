angular.module('templates', []);
angular.module('app', ['templates'])
       .directive('title1', title);

function title(){
    return {
        restrict:'EA',
        templateUrl: 'app/templates/title.template.html'
    };
}
