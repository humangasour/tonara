import React, { Component } from 'react';
import axios from 'axios';

import './Piano.css';

import HighNotes from '../../components/HighNotes/HighNotes';
import MidNotes from '../../components/MidNotes/MidNotes';

class Piano extends Component {
	state = {
		highNotes: [],
		midNotes: []
	}

	componentDidMount() {
		axios.get('https://tonara-4af09.firebaseio.com/notes.json')
		.then(response => {
			const notes = response.data;
			const highNotes = notes.filter(note => note.type === 'high');
			const midNotes = notes.filter(note => note.type === 'mid');
			this.setState({
				highNotes: highNotes,
				midNotes: midNotes,
			})
		})
	}

	render() {
		return (
			<div className="Piano">
				<HighNotes notes={this.state.highNotes} />
				<MidNotes notes={this.state.midNotes} />
			</div>
		)
	}
}

export default Piano;
