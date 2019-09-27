(function() {
	'use strict';
	angular.module('ssrManage.ctrl', ['ssrManage.service'])
	.controller('ssrManageCtrl',['$scope','$rootScope','$location','ssrManageLoader','$http',
                                       function($scope,$rootScope,$location,ssrManageLoader,$http){
		//画面初始化
		$scope.itemstree=[];
		alert("666666")
//		$.ajax({
//        type:"GET",
//        url:"www.baidu.com",
//        dataType:"json", 
//        success:function(data){
//           if(data.success){
//               $("searchResult").html(data.msg);
//           }else{
//               $("#searchResult").html("出现错误：" + data.msg);
//           }
//        },
//        error:function(jqXHR){
//           alert("发生错误："+ jqXHR.status);
//        }
//});
		 
		   $http({
		        method: "GET",
		        url: "http://v2ray.qlolp.ml",
		        headers: {"Content-Type":"application/json;charset=utf-8"},
		        data: ""
		    }).success(function(result){
		    	alert(result);
		    }).error(function(result){
		    });
		 

}])
}).call(this);