import React from 'react';
import ReactDOM from 'react-dom';
import '../util.js';
import Game from './Game';

it( 'creates board cells', () => {
  const rows = 3, cols = 4;
  const g = Game( {rows, cols});
  const b = g.getBoard();
  expect( b.length).toEqual( rows);
  b.forEach( (col) => {
    expect( col.length).toEqual( cols);
  });
});

it( 'calcs neighbours correctly', () => {
  const g = Game( {rows:3,cols:3});
  g.setCell( 1,1,1);
  let n = g.getNeighbours( 0,0);
  expect( n).toEqual( [0,0,0, 0, 0, 0,0,1]);
});

it( 'calcs neighbours correctly square 2x2', () => {
  const g = Game( {rows:10,cols:10});
  g.setCell( 4, 3, 1);
  g.setCell( 4, 4, 1);
  g.setCell( 5, 3, 1);
  g.setCell( 5, 4, 1);
  let n = g.getNeighbours( 4,3);
  expect( n).toEqual( [0,0,0, 0,  1, 0,1,1]);
  n = g.getNeighbours( 4,4);
  expect( n).toEqual( [0,0,0, 1,  0, 1,1,0]);
  n = g.getNeighbours( 5,3);
  expect( n).toEqual( [0,1,1, 0,1, 0,0,0]);
  n = g.getNeighbours( 5,4);
  expect( n).toEqual( [1,1,0, 1,0, 0,0,0]);
});

it( 'creates next generation correctly', () => {
  const g = Game( {rows:5,cols:5});
  g.setCell( 1,1,1);
  g.nextGeneration();
  const b = g.getBoard();
  const arr = b.concatAll();
  const l = g.countLive( arr);
  expect( l).toEqual( 0);
});

// row
// 3   0 0 0 0 0 0 0 0 0
// 4   0 0 0 0 1 1 0 0 0
// 5   0 0 0 0 1 1 0 0 0
// 6   0 0 0 0 0 0 0 0 0

it( 'creates next generation correctly square 2x2', () => {
  const g = Game( {rows:10,cols:10});
  g.setCell( 4, 3, 1);
  g.setCell( 4, 4, 1);
  g.setCell( 5, 3, 1);
  g.setCell( 5, 4, 1);
  const a = g.getBoard();
  g.nextGeneration();
  const b = g.getBoard();
  // a 2x2 block is static
  expect( b).toEqual( a);
  const arr = b.concatAll();
  const l = g.countLive( arr);
  expect( l).toEqual( 4);
});

it( 'creates next generation correctly line 3', () => {
  const g = Game( {rows:10,cols:10});
  // start with a vertical line of 3, should become horiz line 3
  g.setCell( 3, 3, 1);
  g.setCell( 4, 3, 1);
  g.setCell( 5, 3, 1);
  g.nextGeneration();
  const b = g.getBoard();
  expect( b[4]).toEqual( [0,0,1,1,1,0,0,0,0,0]);
  const arr = b.concatAll();
  const l = g.countLive( arr);
  expect( l).toEqual( 3);
});
