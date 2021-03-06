'use strict';

app.service('CommentService', ['$http','$q','$rootScope',
	function($http, $q, $rootScope) {

			console.log("CommentService...") 

			var BASE_URL ='http://localhost:8081/Angular'

				 var factory = {
			        fetchAllComments: fetchAllComments,
			        createComment: createComment,
			        updateComment:updateComment,
			       
			    };
			 
			    return factory;

			    function fetchAllComments(forumId) {
					console.log("calling fetchAllComments ")
					return $http.get(BASE_URL + '/comments/'+forumId).then(
							function(response) {
								console.log(response)
								return response.data;
							}, null);
				};
				
				function createComment(comment) {
					console.log("calling create Comment")
					console.log(comment)
					return $http.post(BASE_URL + '/comments', comment) // 1
					.then(function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while creating Comments');
						return $q.reject(errResponse);
					});
				};

				function updateComment(Comment) {
					console.log("calling fetchAllComment ")
					return $http.put(BASE_URL + '/comments/', Comment) // 2
					.then(function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while updating Comments');
						return $q.reject(errResponse);
					});
				};

		

		} ]);