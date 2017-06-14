import React, { Component } from 'react';
import './App.css';
import Hud from './components/Hud';
import Board from './components/Board/Board';
import Game from './components/Game/Game';

class App extends Component {
  state = {
    game: Game( {rows:10, cols:10, cells:[[3,4],[4,3],[4,4],[4,5]]})
  };
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Hud/>
        <Board cells={this.state.game.getBoard()}/>
      </div>
    );
  }
}

export default App;
