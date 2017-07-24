'use strict';

app.service('ApplyJobService', ['$http','$rootScope','$q', // what is $q-error msg
	function($http,$q ,$rootScope) {

			console.log("jobService...")

			var BASE_URL ='http://localhost:8081/Angular'

				 var factory = {
				applyjobs: 	applyjobs,
				BringAllAppJobs: BringAllAppJobs,
				/*createJob: createJob, applyjobs
				updateJob:updateJob,*/
			       
			    };
				
				
				                              //passing entire object
		    return factory;

		    function applyjobs(job) {
					console.log("calling apply jobs ")
					return $http.post(BASE_URL + '/appliedjobs',job).then(
							function(response) {
								return response.data;
							}, null);
				};                  // passing variable /allappliedjobs/'+userId
				
				function BringAllAppJobs() {
					console.log("calling bringAlljobs ")
					return $http.get(BASE_URL + '/allappliedjobs/').then(
							function(response) {
								return response.data;
							}, null);
				};

				function BringAllMyJobs(usId) { 
					console.log("calling bringAllmyjobs ")
					return $http.get(BASE_URL + '/alljobuserid/'+userId).then(
							function(response) {
								return response.data;
							}, null);
				};


		} ]);