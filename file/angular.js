<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<p>Click the table headers to change the sorting order:</p>

<div ng-app="myApp" ng-controller="namesCtrl">

<table border="1" width="100%">
<tr>
<th ng-click="orderByMe('name')">Name</th>
<th ng-click="orderByMe('country')">Country</th>
</tr>
<tr ng-repeat="x in names | orderBy:myOrderBy">
<td>{{x.name}}</td>
<td>{{x.country}}</td>
</tr>
</table>

</div>

<script>
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'lime',country:'Norway'},
        {name:'jime',country:'Sweden'},
        {name:'Magareth',country:'England'},
        {name:'Hegde',country:'Norway'},
        {name:'Jo',country:'Denmark'},
        {name:'Guav',country:'Sweden'},
        {name:'Brgit',country:'Denmark'},
        {name:'Mari',country:'England'},
        {name:'ai',country:'Norway'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
</script>

</body>
</html>
