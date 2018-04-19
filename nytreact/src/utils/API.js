import axios from 'axios'

export default {
	getArticles: function() {
		return axios.get('/api/articles');
	},
	postArticles: function(articleData) {
		return axios.post('/api/articles', articleData);
	},

	deleteArticles: function(id) {
		return axios.delete('/api/articles' + id);
	}
};