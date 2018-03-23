import React, { Component } from 'react';
import InputPlayer from './InputPlayer';

class Battle extends Component {
  
  state = {
      playerOneName: '',
      playerOneImage: null,
      playerTwoName: '',
      playerTwoImage: null
  }
  

  handleSubmit = (id, username) => {
    this.setState(() => {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    });
  }

  render() {
    const playerOne = this.state.playerOneName;
    const playerTwo = this.state.playerTwoName;
    
    return (
      <div>
        <div>
          {!playerOne && 
            <InputPlayer
              id='playerOne'
              label="Player One"
              onSubmit={this.handleSubmit}
            />}

          {!playerTwo &&
            <InputPlayer 
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />}
        </div>
      </div>
    )
  }
}

export default Battle;