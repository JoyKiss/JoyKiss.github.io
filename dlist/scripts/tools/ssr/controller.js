(function() {
	'use strict';
	angular.module('ssrManage.ctrl', ['ssrManage.service'])
	.controller('ssrManageCtrl',['$scope','$rootScope','$location','ssrManageLoader','$http',
                                       function($scope,$rootScope,$location,ssrManageLoader,$http){
		//画面初始化
		$scope.itemstree=[];
//		alert("666666")
//		function successCallback(data) {
//		    $.each(data.success, function (i, item) {
//		        $("body").append('<h1>' + item.title + '</h1>');
//		    });
//		}
//		$.ajax({
//        url:"http://yingyan.baidu.com/api/v3/entity/list", 
//type : "GET",
//async : false,
//dataType : "jsonp",//数据类型为jsonp  
//jsonp : "successCallback",//服务端用于接收callback调用的function名的参数
//jsonpCallback: 'successCallback'
//
//
//});
//
//		let domain='http://api.douban.com/v2/movie/top250'
//	        fetch(domain,{
//	            start:0,
//	            count:20,
//	            method:'GET',
//	            mode:'cors'
//	        }).then(response=>{
//	            console.log(response)
//	            console.log(response.json())
//	            return response.json()
//	        }).then(res=>{
//	            console.log(res)
//	        }).catch(e=>{
//	            console.log(e)
//	        })
		
		var script = document.createElement('script');
	    script.type = 'text/javascript';

	    // 传参并指定回调执行函数为onBack
	    script.src = 'http://yingyan.baidu.com/api/v3/entity/list?callback=onBack';
	    document.head.appendChild(script);

	    // 回调执行函数
	    function onBack(res) {
	        alert(JSON.stringify(res));
	    }
//		 
//		 $.get("http://yingyan.baidu.com/api/v3/entity/list",
//				  function(json) {
//				      alert(json);
//				  });

//		   $http({
//		        method: "GET",
//		        url: "https://github.com/JoyKiss/JoyKiss.github.io/blob/master/dlist/scripts/app.js",
//		        dataType: 'json',
//		            crossDomain: true
//		    }).success(function(result){
//		    	alert(result);
//		    }).error(function(result){
//		    });
		 

}])
}).call(this);