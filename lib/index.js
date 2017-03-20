const info = process.argv.slice(2);

// Checks if the grid has two numbers that are equal and includes an x
function gridCorrect (array) {
  const gridNumberArray = array[0].match(/\d+/g).map(x => parseInt(x,10));

  return ((gridNumberArray.length === 2) && (gridNumberArray[0] === gridNumberArray[1]) && (array[0].includes('x') || array[0].includes('X'))) ? true : false;
}

// Checks if points are all equal or smaller then grid points
function pointsWithinGrid (array) {
  const gridNumberArray = array[0].match(/\d+/g).map(x => parseInt(x,10));
  array.shift();

  return array.map(x => {return x.replace(/\D/g, '')}).join('').split('').every(x => (x <= gridNumberArray[0]) && x <= gridNumberArray[1]);
}

// Condenses the validation
function validated (info) {
  return gridCorrect(info) && pointsWithinGrid(info) ? true : false;
}

// Creates array with x and y positions
function getPositionArray (positionString) {
  return positionString.match(/\d+/g).map(digitString => parseInt(digitString, 10));
}

// Returns array of letters per difference between two positions
function checkPosition (prevPosition, currentPosition) {
  const [currentX, currentY] = getPositionArray(currentPosition);
  const [prevX, prevY] = prevPosition ? getPositionArray(prevPosition) : [0,0];
  const xDistance = Array(Math.abs(currentX-prevX)).fill(Math.sign(currentX-prevX) === 1 ? 'E' : 'W');
  const yDistance = Array(Math.abs(currentY-prevY)).fill(Math.sign(currentY-prevY) === 1 ? 'N' : 'S');

  return [].concat(xDistance,yDistance,'D');
}

// Returns total array of all letters between all positions given in order
function outputString (inputArray) {
  let prevPosition;
  let currentPosition;

  inputArray = inputArray.reduce((acc, x) => {
    prevPosition = currentPosition;
    currentPosition = x.split(' ').join('');
    return acc.concat(checkPosition(prevPosition, currentPosition));
  }, []);

  return inputArray.join('');
}

// Calls the functions
if (info.length && validated(info)) console.log(outputString(info));
else console.log('error');

module.exports = {
  checkPosition,
  outputString,
  gridCorrect,
  pointsWithinGrid
};