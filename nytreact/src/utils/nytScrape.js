export default {

	let key = //get key

	let search = '';
	let startYear = 0;
	let endYear = 0;

	let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=";

	function searchQuery(numArticles, queryURL) {
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(NYTData) {
			for (let i = 0; i < numArticles; i++) {
				let articleResult = $('<div');
				articleResult.addClass('result');
				
			}
		})
	}

}