import React from 'react';

import './HighNotes.css';

import Key from '../Key/Key';

const HighNotes = (props) =>  {
	const notes = Object.keys(props.notes); //converting the notes recieved into array to iterate over

	// generating keys by iterating the data recieved as props
	const keys = notes.map((note, index) => {
		return <Key key={index} note={props.notes[note].url} />
	});

	const style = {
		"grid-template-columns": `repeat(${notes.length}, 85px)`,
	}

	return ( 
		<div className="Keyboard--white" style={{...style}}>
     {keys}
    </div>
	)
}

export default HighNotes;