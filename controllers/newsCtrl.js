angular.module('hackerNews.controllers', [])
  .controller('newsCtrl', ['$scope', '$http', function($scope, $http) {

  var getNews = function() {

    $http
      .get('http://hn.algolia.com/api/v1/search_by_date?query=angular')
      .then(function(resp){
        console.log(resp.data)
        $scope.news = resp.data.hits
      })
  }

  getNews()

}])
