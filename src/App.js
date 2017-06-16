import React, { Component } from 'react';
import './App.css';
import Hud from './components/Hud';
import Board from './components/Board/Board';
import Game from './components/Game/Game';
import GameController from './components/Game/Control';

class App extends Component {
  state = {
    board_cells: []
  };
  control = GameController();
  game = Game( {rows:50, cols:50}); // , cells:[[3,4],[4,3],[4,4],[4,5]]});
  componentWillMount = () => {
    window.addEventListener( "game_tick", this.onStep);
    this.setState( { board_cells: this.game.getBoard()})
  };
  componentDidMount = () => {
    this.control.start();
  };
  componentWillUnmount = () => {
    window.removeEventListener( "game_tick", this.onStep);
  };

  handleCellClick = (row, col, alive) => {
    console.log( `handleCellClick (${row},${col}) alive[${alive}]`);
    const new_state = alive?0:1;
    this.game.setCell( row, col, new_state);
    this.setState( {board_cells: this.game.getBoard()});
  };
  onStart = () => {
    this.control.start();
  };
  onPause = () => {
    this.control.pause();
  };
  onStep = () => {
    this.game.nextGeneration();
    this.setState( { board_cells: this.game.getBoard()});
  };
  onClear = () => {
    this.game.clear();
    this.setState( {board_cells: this.game.getBoard()});
  };
  render() {
    const container = {
      marginTop: "10px"
    };
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Hud onStart={this.onStart} onPause={this.onPause}
          onStep={this.onStep} onClear={this.onClear}
          generation={this.control.getGeneration()}
        />
        <div style={container}>
          <Board cells={this.state.board_cells} cellClicked={this.handleCellClick}/>
        </div>
      </div>
    );
  }
}

export default App;
