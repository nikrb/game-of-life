import React from 'react';

export default class Hud extends React.Component {
  handleStart = () => {
    console.log( "start");
  };
  handlePause = () => {
    console.log( "pause");
  };
  handleClear = () => {
    console.log( "clear");
  };
  render = () => {
    return (
      <div>
        <button onClick={this.handleStart} >Start</button>
        <button onClick={this.handlePause} >Pause</button>
        <button onClick={this.handleClear} >Clear</button>
        <div>
          Generations: {this.props.generation}
        </div>
      </div>
    );
  };
}
