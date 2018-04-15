import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
	render() {
		return (
			<div>
				<Paper zDepth={2}>
					<h4>Search for article</h4>
					<TextField hintText="Search Topic" />
						<br />
					<TextField hintText="Start Year" />
						<br />
					<TextField hintText="End Year" />
						<br />
					<RaisedButton label="Search" primary={true} />
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