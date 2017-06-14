import React from 'react';

export default class Hud extends React.Component {
  handleStart = () => {
    this.props.onStart();
  };
  handlePause = () => {
    this.props.onPause();
  };
  handleClear = () => {
    this.props.onClear();
  };
  handleStep = () => {
    this.props.onStep();
  };
  render = () => {
    const text_style = {
      marginLeft: "1em"
    };
    return (
      <div>
        <button onClick={this.handleStart} >Start</button>
        <button onClick={this.handlePause} >Pause</button>
        <button onClick={this.handleClear} >Clear</button>
        <button onClick={this.handleStep} >Step</button>
        <span style={text_style}>Generations: {this.props.generation}</span>
      </div>
    );
  };
}
