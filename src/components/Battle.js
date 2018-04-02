import React, { Component } from 'react';
import InputPlayer from './InputPlayer';
import { NavLink } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';

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

  handleReset = (id) => {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    })
  }

  render() {
    const playerOne = this.state.playerOneName;
    const playerTwo = this.state.playerTwoName;
    const playerOneImage = this.state.playerOneImage;
    const playerTwoImage = this.state.playerTwoImage;

    const matchURL = `${this.props.match.url}/result`;
    
    return (
      <div>
        <div className="battle">
          {!playerOne &&
            <InputPlayer
              id='playerOne'
              label="Player One"
              onSubmit={this.handleSubmit}
            /> 
          }
   
          {
            playerOneImage !== null && 
            <PlayerPreview
              id='playerOne'
              username={playerOne}
              avatar={playerOneImage}
              onReset={this.handleReset}
            />
          }

          {!playerTwo && 
            <InputPlayer
              id='playerTwo'
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          }

          {
            playerTwoImage !== null && 
            <PlayerPreview
              id='playerTwo'
              username={playerTwo}
              avatar={playerTwoImage}
              onReset={this.handleReset}
            />
          }
        </div>

        {
          playerOneImage && playerTwoImage && 
          <NavLink to={matchURL}>
            <button>Battle</button>
          </NavLink>
        }

      </div>
    )
  }
}

export default Battle;