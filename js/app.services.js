var app = angular.module('app.services', [])

app.service('dataService', function($http){
    var allMedia = {
		movies: 0,
		series: 0,
		games: 0
	}
	var results = []
	this.getResults = ()=>{
		if (results.length==0){
		}
		return results
	}
	this.getCountedMedia = ()=>{
		return allMedia
    }
    var init = ()=>{
    	$http({
		  method: 'GET',
		  url: 'http://localhost/response.json'
		}).then( (res)=> {
			if (res.status==200 && !!res.data && !!res.data.results && res.data.results.length>0){
				formatResults(res.data.results)
			}
		  }, (errRes)=> {
		  	alert('Sorry, there is a problem with getting the data')
		  	console.error('Error get json file',errRes)
		  });
    }
    var formatResults = (dataArr) =>{
    	dataArr.map(function(item) {
    		switch(item.Type){
    			case 'movie':
    				allMedia.movies++
    				break;
    			case 'series':
    				allMedia.series++
    				break;
    			case 'game':
    				allMedia.games++
    				break;
    		}
			// Poster
			if (!item.Poster || item.Poster =='N/A'){
				item.Poster = 'https://pbs.twimg.com/profile_images/2260555298/N_A_Facebook_blk_400x400.jpg'
			}
    	})
    	results = dataArr
    }
    init()
})