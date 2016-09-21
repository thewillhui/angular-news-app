angular.module('hackerNews.services', [])
  .factory('news', function($http) {

  return {
    list: function(){
      var get =  $http
        .get('http://hn.algolia.com/api/v1/search_by_date?query=angular')
        .then(function(resp){
          return resp;
        })
        return get;
    }
  }
});
