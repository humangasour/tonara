import React, { Component } from 'react';

import './Key.css';

class Key extends Component {
	constructor(props) {
    super(props);
    this.state = { play: false };
    this.url = this.props.note; // path of the note to be binded to the key
    this.note = new Audio(this.url); 
    this.playSound = this.playSound.bind(this); 
  }	

  playSound() {
    this.setState({ play: true });
    this.note.play();
  }

	render() {
		return <div className={this.props.black ? 'Key--black' : 'Key'} onClick={this.playSound}>{this.props.label}</div>
	}
}

export default Key;