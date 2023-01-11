import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    checkForWinner(newBoard);
  };

  const checkForWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setGameOver(true);
      setWinner(null);
    }
  };

  const renderSquare = (index) => {
    return (
      <div
        className={`square ${board[index] === 'X' ? 'bg-red-500' : 'bg-blue-500'}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameOver(false);
    setWinner(null);
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {gameOver && (
        <div className="text-center mt-4">
          {winner ? `The winner is ${winner}` : 'The game is a tie'}
          <button className="restart-button" onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
