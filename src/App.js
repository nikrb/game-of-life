import React, { Component } from 'react';
import './App.css';
import Hud from './components/Hud';
import Board from './components/Board/Board';
import Game from './components/Game/Game';
import GameController from './components/Game/Control';

class App extends Component {
  state = {
    force_update: 0
  };
  control = GameController();
  game = Game( {rows:10, cols:10, cells:[[3,4],[4,3],[4,4],[4,5]]});
  componentWillMount = () => {
    window.addEventListener( "game_tick", this.onStep);
  };
  componentWillUnmount = () => {
    window.removeEventListener( "game_tick", this.onStep);
  };

  handleCellClick = (row, col, alive) => {
    console.log( `handleCellClick (${row},${col}) alive[${alive}]`);
    const new_state = alive?0:1;
    this.game.setCell( row, col, new_state);
    this.setState( {force_update: !this.state.force_update});
  };
  onStart = () => {
    this.control.start();
  };
  onPause = () => {
    this.control.pause();
  };
  onStep = () => {
    this.game.nextGeneration();
    this.setState( { force_update: !this.state.force_update});
  };
  onClear = () => {
    this.game.clear();
    this.setState( {force_update: !this.state.force_update});
  };
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Hud onStart={this.onStart} onPause={this.onPause}
          onStep={this.onStep} onClear={this.onClear}
        />
        <Board cells={this.game.getBoard()} cellClicked={this.handleCellClick}/>
      </div>
    );
  }
}

export default App;
