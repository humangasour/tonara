import React, { Fragment } from 'react';

import './MidNotes.css';

import Key from '../Key/Key';

const MidNotes = (props) => {
  // generating keys by iterating the data recieved as props
	const keys = Object.keys(props.notes).map((note, index) => {
		return <Key key={index} note={props.notes[note].url} black />
	});	

  const keySets = () => {
    const keySet = [];
    for (let i = 0; i < keys.length; i+=5) {
      keySet.push(
        <Fragment key={i}>
          <div className="Keyset1"> {/* keyset1 is the black keyset with 2 keys */}
            {keys[i]}
            {keys[i+1]}
          </div>
          <div className="Keyset2"> {/* keyset2 is the black keyset with 3 keys */}
            {keys[i+2]}
            {keys[i+3]}
            {keys[i+4]}
          </div>
        </Fragment>
      )
    }
    return keySet;
  }
                    
     
	return (
		<div className="Keyboard--black">
      {keySets()}
    </div>
	)
}

export default MidNotes;
