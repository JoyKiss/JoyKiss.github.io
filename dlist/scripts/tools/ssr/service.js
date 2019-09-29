(function() {
  'use strict';
  angular.module('ssrManage.service', [])
  .factory('ssrManageLoader',['$http','$route',function($http,$route){
	  return {
	      getOffDataSource: function (pager) {
              return $http({
                  method: 'get',
                  url: 'http://yingyan.baidu.com/api/v3/entity/list',
                  contentType: 'application/json',
                  headers: {
                      'Content-Type': 'application/json;charset=UTF-8'
                  }
              });
          },
			
	  }
  }]);
}).call(this);