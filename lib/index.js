const info = process.argv.slice(2);



function gridCorrect (array) {
  return !((array[0].length !== 3) || (array[0][1].toLowerCase() !== 'x') || (!parseInt(array[0][0],10) || !parseInt(array[0][2],10)));
}

function pointsWithinGrid (array) {
  return array.map(x => {return x.replace(/\D/g, '')}).join('').split('').every(x => x <= parseInt(array[0][0],10));
}

function validated (info) {
  return gridCorrect(info) && pointsWithinGrid(info) ? true : false;
}

function checkPosition (prevPosition, currentPosition, gridSize) {
  var letterBankArray = ['N','S','E','W','D'];
  var currentX = parseInt(currentPosition.replace(/\D/g, '')[0],10);
  var currentY = parseInt(currentPosition.replace(/\D/g, '')[1],10);
  var prevX = prevPosition ? parseInt(prevPosition.replace(/\D/g, '')[0],10) : 0;
  var prevY = prevPosition ? parseInt(prevPosition.replace(/\D/g, '')[1],10) : 0;

  var xDistance = Array.from(Array(Math.abs(currentX-prevX)).keys())
    .map(n => {
      return Math.sign(currentX-prevX) === 1 ? letterBankArray[2] : letterBankArray[3];
    });

  var yDistance = Array.from(Array(Math.abs(currentY-prevY)).keys())
    .map(n => {
      return Math.sign(currentY-prevY) === 1 ? letterBankArray[0] : letterBankArray[1];
    });

  return [].concat(xDistance,yDistance,letterBankArray[4]);

}

function outputString (inputArray) {
  var gridSize = parseInt(inputArray[0][0],10);
  var prevPosition;
  var currentPosition;

  inputArray.shift();
  inputArray = inputArray.reduce((acc, x) => {
    prevPosition = currentPosition;
    currentPosition = x.split(' ').join('');
    return acc.concat(checkPosition(prevPosition, currentPosition, gridSize));
  }, []);

  return inputArray.join('');
}


// function inputValidatorNumbers (array) {
//   array.shift();
//   arrayLengthOriginal = array.length;

//   array = array.reduce((newArray, value) => {
//     return newArray.concat(
//       value[0] !== '(' ||
//       value[5] !== ')' ||
//       value.length > 7 ||
//       isNaN(parseInt(value[1],10)) ||
//       isNaN(parseInt(value[4],10)) ?
//       null : value
//     );
//   }, []).filter(Boolean);

//   return arrayLengthOriginal === array.length ? true : false;


// }


if (info.length && validated(info)) {
  console.log(outputString(info));
} else {
  console.log('error');
}




module.exports = {
  checkPosition,
  outputString,
  gridCorrect,
  pointsWithinGrid
};