/*jshint esversion: 6 */
"use strict";
 function gridInit(){
  let grid = [];
  function gridMaker (rows, columns){
    for (let i = 0; i < rows; i++){
      grid.push([]);
      for (let j = 1; j <= columns; j++){
        grid[i].push([]);
      }
    }
    return grid;
  }
  function gridAppend (array, rows, columns){
    for (let i = array.length - rows; i <= rows - array.length; i++){
      grid.push([]);
      for (let j = array.length - columns; j <= columns - array.length; j++){
        grid[i].push(j);
        console.log(grid);
      }
    }
    return grid;
  }
 return {
  gridMaker : gridMaker,
  gridAppend : gridAppend
};
 }
let grid = gridInit();
console.log(grid);
let firstGrid = grid.gridMaker(4,3);
console.log(firstGrid);

