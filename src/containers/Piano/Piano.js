import React, { Component } from 'react';

import './Piano.css';

import HighNotes from '../../components/HighNotes/HighNotes';
import MidNotes from '../../components/MidNotes/MidNotes';

import { highNotes, midNotes } from '../../assets/exports/notes';

class Piano extends Component {
	render() {

		console.log('high', highNotes);
		return (
			<div className="Piano">
				<HighNotes notes={highNotes} />
				<MidNotes notes={midNotes} />
			</div>
		)
	}
}

export default Piano;
