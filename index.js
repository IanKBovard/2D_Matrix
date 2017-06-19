/*jshint esversion: 6 */
"use strict";
 function gridInit(){
  let grid = [];
  function gridMaker (rows, columns){
    for (let i = 0; i <= rows; i++){
      grid.push([]);
      for (let j = 1; j <= columns; j++){
        grid[i].push(j);
      }
    }
    return grid;
  }
 return gridMaker;
 }
let grid = gridInit();
let newGrid = grid(4,3);
console.log(newGrid);
