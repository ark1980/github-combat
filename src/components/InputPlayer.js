import React, { Component } from 'react';

class InputPlayer extends Component {
  state = {
    username: ''
  }
  
  handleChange = (event) => {
    this.setState({
        username: event.target.value
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">{this.props.label}</label>
          <input 
            type="text"
            placeholder="Github username"
            value={this.state.username}
            onChange={this.handleChange}
            id='username'
            autoComplete="off" 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default InputPlayer;