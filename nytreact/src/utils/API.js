import router from "express";

export default {
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