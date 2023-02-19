/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import knightTravails from './script';

library.add(fas, far);

const coordinates = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],

  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],

  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],

  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],

  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],

  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [5, 7],

  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],

  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
];

function App() {
  const [startingPointIndex, setStartingPointIndex] = useState(null);
  const [start, setStart] = useState(true);
  const [paths, setPaths] = useState([]);
  // const [resetButton, setResetButton] = useState(false);

  const handleClick = (i) => {
    if (start) {
      setStartingPointIndex(i);
      setStart(false);
    } else {
      setPaths(
        knightTravails(
          coordinates[startingPointIndex],
          coordinates[i]
        ).splice(1)
      );
    }
  };

  const reset = () => {
    setStartingPointIndex(null);
    setStart(true);
    setPaths([]);
  };

  return (
    <div className="App">
      <h1 className="board-state">
        {start ? 'Select Starting Position' : 'Select Target'}
      </h1>

      <div className="board">
        {coordinates.map((position, i) => (
          <div
            className="tile"
            key={position}
            onClick={() => handleClick(i)}
          >
            {startingPointIndex === i ? (
              <>
                <FontAwesomeIcon
                  icon="fa-solid fa-chess-knight"
                  id="starting-horse"
                />
                <p className="progression">S</p>
              </>
            ) : null}

            {paths.map((path, index, arr) => {
              if (
                JSON.stringify(path) ===
                JSON.stringify(coordinates[i])
              ) {
                if (arr.length - 1 === index)
                  return (
                    <>
                      <FontAwesomeIcon icon="fa-solid fa-chess-knight" />
                      <p className="progression">F</p>
                    </>
                  );
                else {
                  return (
                    <>
                      <FontAwesomeIcon icon="fa-solid fa-chess-knight" />
                      <p className="progression">{index + 1}</p>
                    </>
                  );
                }
              } else {
                return null;
              }
            })}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={reset}
        style={{ visibility: !start ? 'visible' : 'hidden' }}
      >
        New Starting Position
      </button>
    </div>
  );
}

export default App;

