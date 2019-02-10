import React from 'react';

import './HighNotes.css';

import Key from '../Key/Key';

const HighNotes = (props) =>  {
	const keys = Object.keys(props.notes).map((note, index) => {
		return <Key key={index} note={props.notes[note]} />
	});

	return ( 
		<div className="Keyboard--white">
     {keys}
     {keys}
    </div>
	)
}

export default HighNotes;