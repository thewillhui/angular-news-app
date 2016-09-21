angular.module('hackerNews.controllers', [])
  .controller('newsCtrl', ['$scope', '$http', '$window', 'news', function($scope, $http, $window, news) {

  getNews();

  function getNews() {
    news.list().then(function(resp){
      $scope.news = resp.data.hits;
    })
  }

  $scope.go = function(newsObj){
    $window.open(newsObj.story_url);
  };

  $scope.deleteRow = function(newsObj){
    var index = $scope.news.indexOf(newsObj);
    $scope.news.splice(index,1);
  }


}]);
