import React from 'react';

export default class Board extends React.Component {
  render = () => {
    console.log( "board:", this.props.cells);
    const table_row = {
      display: "flex",
      flexDirection: "row",
      flexGrow: "0",
      flexWrap: "nowrap"
    };
    const table_cell = {
      border: "1px solid rgba( 127,127,127,0.8)"
    };
    const rows = this.props.cells.map( ( row, i) => {
      return (
        <div key={i} style={table_row}>{
          row.map( (col, j) => {
            const colour = (col)?"black":"white";
            return (
              <div key={i*100+j} style={{...table_cell, width:"8px", height:"8px", backgroundColor:colour}}/>
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
