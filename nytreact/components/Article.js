const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema({
	title: {
		type: String,
		trim: true
	},

	date: {
		type: String,
		trim: true
	},

	url: {
		type: String,
		trim: true
	}
})

module.exports = Article;