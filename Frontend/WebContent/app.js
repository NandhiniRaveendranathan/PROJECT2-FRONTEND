

var app = angular.module('myApp', [ 'ngRoute', 'ngCookies',]);

app.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl : 'index.html'
	})   
	.when('/home', {
		templateUrl : 'User/User.html' //Home/Home.html

	})
         .when('/admin', {
		templateUrl : 'Admin/Admin.html'
			

	})
	

	.when('/register', {
		templateUrl : 'User/Register.html',
			controller : 'UserController',
			controllerAs : 'uc'	
	})
	
	.when('/login', {
		templateUrl : 'User/Login.html',
		controller : 'UserController',
		controllerAs : 'uc'	
	})
	.when('/Admin', {
		templateUrl : 'Admin/Admin.html'
	})
	
			
	.when('/blog', {
		
			templateUrl : 'Blog/Blogform.html',
			controller : 'BlogController',
			controllerAs : 'bc'	
	})
	.when('/viewB', {
		templateUrl : 'Blog/NewFile.html',
			controller : 'BlogController',
			controllerAs : 'bc'
	})
	
	.when('/savejobdetails', {
		templateUrl : 'Job/Jobform.html',
		controller : 'JobController',
		controllerAs : 'jc'
	})
	.when('/viewJ', {
		templateUrl : 'Job/NewFile.html',
		controller : 'JobController',
		controllerAs : 'jc'

	})
	
	.when('/forum', {
		templateUrl : 'Forum/forum.html',
		controller : 'ForumController',
		controllerAs : 'fc'

	})

	.when('/viewF', {
		templateUrl : 'Forum/NewFile.html',
		controller : 'ForumController',
		controllerAs : 'fc'

	})
	.when('/adminBlogd', {
		templateUrl : 'Admin/BlogDetails.html',
		controller : 'BlogController',
		controllerAs : 'bcc'
	})
	
	.when('/adminForumd', {
		templateUrl : 'Admin/ForumDetails.html',
		controller : 'ForumController',
		controllerAs : 'fcc'
	})
	
	.when('/readmore', {
		templateUrl :'Admin/ReadMore.html',
			controller :'BlogController',
			controllerAs : 'bc'
		
	})
	
	
	.when('/createBlogComment',{
		templateUrl :'Admin/ReadMore.html',
		controller :'BlogController',
		controllerAs : 'bc'	
		
			})
			
			.when('/readmoree', {
		templateUrl :'Admin/ReadMoreForum.html',
			controller :'ForumController',
			controllerAs : 'fc'
		
	})
	.when('/createComment', {
		templateUrl :'Admin/ReadMoreForum.html',
			controller :'ForumController',
			controllerAs : 'fc'
		
	})
	.when('/view_applied_jobs', {
		templateUrl : 'Job/viewappjobs.html',
		controller : 'JobController'
	})
	
	
	
	.when('/find', {
		templateUrl : 'User/FriendReq.html',
		controller : 'UserController',
		controllerAs : 'uc'
		
			
	})

	
	.when('/jobP', {
		templateUrl : 'ApplyJob/BringAllJobs.html',
		controller : 'JobController',
		controllerAs : 'jc'

	})
	.when('/chat',{
		templateUrl:'Chat/Chat.html',
		controller:'ChatController'
	})
	
	.when('/jobP', {
		templateUrl : 'User/Profile.html',
		controller : 'JobController',
		controllerAs : 'jc'

	})

	
	.otherwise({
		redirectTo : 'index.html'
	});

});