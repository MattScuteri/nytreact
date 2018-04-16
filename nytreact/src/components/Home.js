import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import API from "../utls/API";

class Home extends Component {
	state = {
		articles: [],
		title: '',
		date: '',
		url: ''
	};

	componentDidMount() {
		this.loadArticles();
	}

	loadArticles = () => {
		API.getArticles()
			.then(res =>
				this.setState({ article: res.data,
								title: '',
								date: '',
								url: ''})
			).catch(err => console.log(err));
	};

	deleteArticles = id => {
		API.deleteArticles(id)
			.then(res => this.loadArticles())
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		if (this.state.title && this.state.date) {
			API.postArticle({
				title: this.state.title,
				date: this.state.date,
				url: this.state.url
			}).then(res => this.loadArticles())
			.catch(err => console.log(err));
		}
	};

	render() {
		return (
			<div>
				<Paper zDepth={2}>
					<h4>Search for article</h4>
					<TextField className="search-term" hintText="Search Topic" />
						<br />
					<TextField className="start-year" hintText="Start Year" />
						<br />
					<TextField className="end-year" hintText="End Year" />
						<br />
					<RaisedButton className="run-search" label="Search" primary={true} />
				</Paper>

				<Paper zDepth={2}>
					<h4>Results</h4>
					<div className="display-results">
					</div>
				</Paper>
			</div>
		)
	}
}

export default Home;