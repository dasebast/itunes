var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here


    // this.getArtist = function(artist) {
    // 	var deferred = $q.defer();
    // 	$http({
    // 		method: 'JSONP',
    // 		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    // 	}).then(function(response) {
    // 		// console.log(response);
    // 		var result = response.data.results;
    // 		for (var i = 0; i < result.length; i++) {
    // 			result[i].Play = result[i].previewUrl;
    // 			result[i].Artist = result[i].artistName;
    // 			result[i].Collection = result[i].collectionName;
    // 			result[i].AlbumArt = result[i].artworkUrl100;
    // 			result[i].Type = result[i].kind;
    // 			result[i].CollectionPrice = result[i].collectionPrice;
    // 		}
    // 		deferred.resolve(result);
    // 	}, function(err) {
    // 		deferred.reject(err);
    // 	});
    // 	return deferred.promise;
    //   };



    this.getArtist = function(artist, media) {
    
    	var deferred = $q.defer();
    	$http({
    		method: 'JSONP',
    		url: 'https://itunes.apple.com/search?term=' + artist + '&media=' + media + '&callback=JSON_CALLBACK'
    	}).then(function(response) {
    		// console.log(response);
    		var result = response.data.results;
    		var albumInfo = [];
    		for (var i = 0; i < result.length; i++) {
    			var songObject = {
    			Play: result[i].previewUrl,
    			Artist: result[i].artistName,
    			Collection: result[i].collectionName,
    			AlbumArt: result[i].artworkUrl100,
    			Type: result[i].kind,
    			CollectionPrice: result[i].collectionPrice,
    			TrackCount: result[i].trackCount
    			}
    			albumInfo.push(songObject);
    		}
    		deferred.resolve(albumInfo);
    	}, function(err) {
    		deferred.reject(err);
    	});
    	return deferred.promise;
      };


});
















