import React from 'react';

export default class Cell extends React.Component {
  handleClick = () => {
    this.props.handleClick( this.props.row, this.props.col, this.props.colour);
  };
  render = () => {
    const table_cell = {
      border: "1px solid rgba( 127,127,127,0.8)"
    };
    return (
      <div onClick={this.handleClick}
        style={{...table_cell, width:"8px", height:"8px", backgroundColor:this.props.colour}}>
      </div>
    );
  };
}
