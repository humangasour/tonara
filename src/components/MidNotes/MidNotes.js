import React, { Fragment } from 'react';

import './MidNotes.css';

import Key from '../Key/Key';

const MidNotes = (props) => {
  // generating keys by iterating the data recieved as props
	const keys = Object.keys(props.notes).map((note, index) => {
		return <Key key={index} note={props.notes[note]} black />
	});	

  const keySets = (
    <Fragment>
      <div className="Keyset1"> {/* keyset1 is the black keyset with 2 keys */}
        {keys[0]}
        {keys[1]}
      </div>
      <div className="Keyset2"> {/* keyset2 is the black keyset with 3 keys */}
        {keys[2]}
        {keys[3]}
        {keys[4]}
      </div>
    </Fragment>
  )

	return (
		<div className="Keyboard--black">
      {keySets}
    	{keySets}
    </div>
	)
}

export default MidNotes;
