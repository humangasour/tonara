import React from 'react';

import './MidNotes.css';

import Key from '../Key/Key';

const MidNotes = (props) => {
	const keys = Object.keys(props.notes).map((note, index) => {
		return (
			<Key key={index} note={props.notes[note]} black />
		)
	});	

	return (
		<div className="Keyboard--black">
    	<div className="Keyset1">
      	{keys[0]}
      	{keys[1]}
    	</div>
    	<div className="Keyset2">
      	{keys[2]}
      	{keys[3]}
      	{keys[4]}
    	</div>
    	<div className="Keyset1">
      	{keys[0]}
      	{keys[1]}
    	</div>
    	<div className="Keyset2">
      	{keys[2]}
      	{keys[3]}
      	{keys[4]}
    	</div>
    </div>
	)
}

export default MidNotes;
