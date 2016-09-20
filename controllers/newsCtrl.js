angular.module('hackerNews.controllers', [])
  .controller('newsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {

  var getNews = function() {
    $http
      .get('http://hn.algolia.com/api/v1/search_by_date?query=angular')
      .then(function(resp){
        $scope.news = resp.data.hits
      }, function(error){
        console.log(error)
      })
  }

  getNews()

  $scope.go = function(newsObj){
    $window.open(newsObj.story_url)
  }

  $scope.delete = function(){
    $http
      .delete('http://hn.algolia.com/api/v1/search_by_date?query=angular')
  }


}])
