import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Saved extends Component {
	render() {
		return (
			<Paper zDepth={2}>
				<h4>Saved Articles</h4>
			</Paper>
		)
	}
}

export default Saved;