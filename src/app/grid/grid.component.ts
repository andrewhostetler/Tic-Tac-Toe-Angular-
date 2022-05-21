import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  grid: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  x: string = 'X';
  o: string = 'O';
  currentPlayer: string = this.x;
  winner: string = '';

  constructor() {}

  ngOnInit() {}

  reset() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.winner = '';
    this.currentPlayer = this.x;
  }

  onClick(i: number, j: number) {
    // console.log(`i: ${i} | ${j}`);
    // Mark spot
    const player = this.currentPlayer;
    this.grid[i][j] = this.currentPlayer;

    // Make it the next players turn
    if (this.currentPlayer === this.x) {
      this.currentPlayer = this.o;
    } else {
      this.currentPlayer = this.x;
    }

    // Validate a winner
    // Vertical
    if (
      this.grid[0][j] === player &&
      this.grid[1][j] === player &&
      this.grid[2][j] === player
    ) {
      // success
      this.winner = `${player} WON!!`;
    }
    // Horizontal
    else if (
      this.grid[i][0] === player &&
      this.grid[i][1] === player &&
      this.grid[i][2] === player
    ) {
      // success
      this.winner = `${player} WON!!`;
    }
    // Diagonals (top-left -> btm-right)
    else if (
      this.grid[0][0] === player &&
      this.grid[1][1] === player &&
      this.grid[2][2] === player
    ) {
      // success
      this.winner = `${player} WON!!`;
    }
    // Diagonals (top-right -> btm-left)
    else if (
      this.grid[0][2] === player &&
      this.grid[1][1] === player &&
      this.grid[2][0] === player
    ) {
      // success
      this.winner = `${player} WON!!`;
    }
  }
}
