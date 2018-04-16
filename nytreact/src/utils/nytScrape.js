import controller from ('../controllers/articleControllers');

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

				if (NYTData.response.doc[i].headline !== 'null') {
					$('.result').append('<h3 class="articleHeadline">' + NYTData.response.docs[i].headline.main + '</h3>');

					console.log(NYTData.response.docs[i].headline.main);
				}
			}
		})

	$('.run-search').on('click', function(event) {
		event.preventDefault();

		$('.display-results').empty();

		searchTerm = $('.search-term').val().trim();
		startYear = $('.start-year').val().trim();
		endYear = $('.end-year').val().trim();
	})
	}

}