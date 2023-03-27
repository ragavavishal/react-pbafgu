import React, { useMemo } from 'react';
import BlackBishop from './icons/black-bishop.svg';
import './style.css';

export default function App() {
  return <ChessContainer m={8} n={8} />;
}

const ChessContainer = ({ m, n }) => {
  const iconPlacement = {

  }

  function getCoin(event) {
    event.stopPropagation();
    event.preventDefault();
    let coin = event.target.getAttribute('data-cd');
    // console.log('getCoin', coin);
  }

  function drawCell() {
    let cellArray = [];
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        const index = (x - 1) * m + y;
        cellArray.push(<Cell key={index} row={x} col={y} size={m} />);
      }
    }
    return cellArray;
  }

  return (
    <>
      <div className="chessContainer" onClick={getCoin}>
        {drawCell()}
      </div>
    </>
  );
};

const Cell = ({ row, col, size }) => {
  const index = (row - 1) * size + col;

  const color = useMemo(() => {
    if (row % 2 === 0) {
      // console.log(row, col);
      //even row
      if (col % 2 === 0) {
        //col even
        return 'white';
      } else {
        //col odd
        return 'black';
      }
    } else {
      //odd row
      if (col % 2 === 0) {
        //col even
        return 'black';
      } else {
        //col odd
        return 'white';
      }
    }
  }, [row, col]);

  return (
    <div
      className={`cellContainer ${color}`}
      data-index={index}
      data-cd={`${row}-${col}`}
    >
      {/* <img src={BlackBishop} className="chessIcons"/> */}
      {`(${row},${col})`}
    </div>
  );
};
