import React from 'react'
import './TicTacToe.css';

function Square(props) {
  return (
      <button 
        className="tictactoe-square" 
        onClick={props.onClick}>
          {props.value}
      </button>
  )
}
  
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      Winner: null,
    };
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}          
        />
    );
  }

  nextPlayer(){
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i] !== null || this.state.Winner !== null){
      return;
    }
    squares[i] = this.nextPlayer();
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      Winner: calculateWinner(squares),
    });
  }    

  render() {
    let status;
    if (this.state.Winner !== null) {
      status = this.state.Winner;
    }
    else {
      status = 'Next player: ' + this.nextPlayer();
    }
    

    return (
      <div>
        <div className="tictactoe-status">{status}</div>
        <div className="tictactoe-board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="tictactoe-board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="tictactoe-board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
      return "The winner is " + squares[a] + '!';
    }      
  }
  if (squares.some(function(e){ return e === null})){
    return null;
  }
  return "It's a draw!";
}

class TicTacToe extends React.Component {
  constructor(props){
    super(props);
    document.title = "Play TicTacToe"
  }
  
  render() {
    return (
      <div className="tictactoe">
        <div className="tictactoe-board">
          <Board />
        </div>        
      </div>
    );
  }
}  

export default TicTacToe;