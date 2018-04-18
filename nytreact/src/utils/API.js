import router from "express";
import axios from 'axios';

const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
const key = process.env.NYT_KEY

export default {
	searchArticle: query => {
		return axios.get(`${queryURL}${key}&q=${query}`)
	},

	getArticles: function() {
		return router.get('/api/articles');
	},
	postArticles: function(articleData) {
		return router.post('/api/articles', articleData);
	},

	deleteArticles: function(id) {
		return router.delete('/api/articles' + id);
	}
};