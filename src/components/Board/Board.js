import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
  handleClick = (row, col, alive) => {
    console.log( `cell clicked (${row},${col}) colour[${alive}]`)
  };
  render = () => {
    console.log( "board:", this.props.cells);
    const table_row = {
      display: "flex",
      flexDirection: "row",
      flexGrow: "0",
      flexWrap: "nowrap"
    };
    const rows = this.props.cells.map( ( row, i) => {
      return (
        <div key={i} style={table_row}>{
          row.map( (col, j) => {
            const colour = (col)?"black":"white";
            return (
              <Cell key={i*100+j}
                handleClick={this.handleClick} row={i} col={j} colour={colour} />
            );
          })
        }</div>
      );
    });
    return (
      <div>{rows}</div>
    );
  };
}
