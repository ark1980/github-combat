import React from 'react';

const PlayerPreview = (props) => {
 
  return (
    <div className="playerPreview">
      <h2>@ {props.username}</h2>
      <img src={props.avatar} alt={props.username}/>
      <button 
        onClick={props.onReset.bind(null, props.id)}
        className="resetButton">
        reset
      </button>
    </div>
  );
}

export default PlayerPreview;