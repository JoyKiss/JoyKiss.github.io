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
		
//		var script = document.createElement('script');
//	    script.type = 'text/javascript';
//
//	    // 传参并指定回调执行函数为onBack
//	    script.src = 'http://yingyan.baidu.com/api/v3/entity/list?callback=onBack';
//	    document.head.appendChild(script);
//
//	    // 回调执行函数
//	    function onBack(res) {
//	        alert(JSON.stringify(res));
//	    }
//		 
//		 $.get("http://yingyan.baidu.com/api/v3/entity/list",
//				  function(json) {
//				      alert(json);
//				  });
//		  $http({
//	            method: "GET",
//	            url: "http://yingyan.baidu.com/api/v3/entity/list",
//	            contentType: "application/json"
//	        }).then(function successCallback(response) {
//	            console.log("success:" + response.data.Name)
//	        }, function errorCallback(response) {
//	            console.log("error:" + response.data)
//	        });
//		ssrManageLoader.getOffDataSource().success(function (data) {
//			alert(data)
//         }).error(function(e){
//         });
//		$http.jsonp("https://github.com/JoyKiss/JoyKiss.github.io/blob/master/dlist/scripts/app.js?jsonp=badgeabc&siteid=137bd406");
//		function badgeabc(data){ console.log(data)}
//		$http.jsonp({
//		        method: "GET",
//		        url: "https://github.com/JoyKiss/JoyKiss.github.io/blob/master/dlist/scripts/app.js",
//		        dataType: 'jsonp',
//		            crossDomain: true
//		    }).success(function(result){
//		    	alert(result);
//		    }).error(function(result){
//		    });
		 
//		function loadScript(url, func) {
//			  var head = document.head || document.getElementByTagName('head')[0];
//			  var script = document.createElement('script');
//			  script.src = url;
//
//			  script.onload = script.onreadystatechange = function(){
//			    if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete'){
//			      func();
//			      script.onload = script.onreadystatechange = null;
//			    }
//			  };
//			  head.insertBefore(script,head.childNodes[0]);
//			}
//			window.baidu = {
//			  sug: function(data){
//			    console.log(data);
//			  }
//			}
//			loadScript('http://suggestion.baidu.com/su?wd=w',function(){console.log('loaded')});
		
		var xhr =  new XMLHttpRequest();
		xhr.onreadystatechange = function () {
		    if(xhr.readyState == 4){
		        if(xhr.status >= 200 && xhr.status < 304 || xhr.status == 304){
		            console.log(xhr.responseText);
		        }
		    }
		}
		xhr.open('get', 'http://www.baidu.com');
		xhr.send(null);
}])
}).call(this);