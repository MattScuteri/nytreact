const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact')

app.listen(PORT, function() {
	console.log(`App listening on PORT ${PORT}!`);
});