function Ctrl($scope,$http){
	$scope.loadMore = function(){
		$http.get('/load-vars').success(function(data){
			console.log(data);
			$scope.vars = data;
		});
	};
}