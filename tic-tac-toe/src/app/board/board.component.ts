import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
//squares represents 9 moves on gameboard
//xIsNext determines current player
//winner takes a string X or O 
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  //constructor runs immediately when class is created
  constructor() { }
  //lifecylce hook  for initial setup work on component
  ngOnInit(): void {
    this.newGame();
  }
  //starts squares as empty then fills them with X or O
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }
  //xIsNext determines player using gameboard
  //player name is either X or O
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  //click event for when user makes a move
  //previously clicked squares do nothing
  //empty squares are nulled and spliced from array
  //toggles turn to next player
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }
  //winner is declared when a user marks all squares in a sequence below
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[b] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
