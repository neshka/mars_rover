const rover1 = {
    
    position: {
        x: 0,
        y: 0
    },
    
    direction: 'N'
};


function turnLeft (rover){
    switch(rover.direction) {
        case 'N':
            rover.direction = 'W'
          break;
        case 'E':
            rover.direction = 'N'
          break;
        case 'S':
            rover.direction = 'E'
          break;
        case 'W':
            rover.direction = 'S'
          break;
        default:
          //change for err?
          rover.direction = rover.direction
      }

      console.log('New direction: ' + rover.direction)
};

function turnRight (rover){
    switch(rover.direction) {
        case 'N':
            rover.direction = 'E'
          break;
        case 'E':
            rover.direction = 'S'
          break;
        case 'S':
            rover.direction = 'W'
          break;
        case 'W':
            rover.direction = 'N'
          break;
        default:
          //change for err?
          rover.direction = rover.direction
      }

      console.log('New direction: ' + rover.direction)
};


function move(rover){
    switch(rover.direction) {
        case 'N':
            rover.position.y = rover.position.y + 1
          break;
        case 'E':
        rover.position.y = rover.position.x + 1
          break;
        case 'S':
        rover.position.y = rover.position.y - 1
          break;
        case 'W':
        rover.position.y = rover.position.x - 1
          break;
        default:
          //change for err?
          rover.position.x = rover.position.x,
          rover.position.y = rover.position.y
      }

      console.log('Updated position: x: ' + rover.position.x + ' , y: ' + rover.position.y)
};


console.log(rover1.position.x);
console.log(rover1.direction);
console.log(turnLeft(rover1));
console.log(turnRight(rover1));
console.log(move(rover1));