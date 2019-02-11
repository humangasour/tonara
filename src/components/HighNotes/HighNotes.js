import React from 'react';

import './HighNotes.css';

import Key from '../Key/Key';

const HighNotes = (props) =>  {
	// generating keys by iterating the data recieved as props
	const keys = Object.keys(props.notes).map((note, index) => {
		return <Key key={index} note={props.notes[note].url} />
	});

	return ( 
		<div className="Keyboard--white">
     {keys}
    </div>
	)
}

export default HighNotes;