class Rover {
  constructor(positionX, positionY, direction) {

    this.position.x = positionX;
    this.position.y = positionY;

    this.direction = direction;
  }

  //Method to turn left
  turnLeft() {
    switch(Rover.direction) {
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
  }

  turnRight() {
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
  }

  move(){
  switch(rover.direction) {
      case 'N':
        rover.position.y = rover.position.y + 1
        break;
      case 'E':
      rover.position.x = rover.position.x + 1
        break;
      case 'S':
      rover.position.y = rover.position.y - 1
        break;
      case 'W':
      rover.position.x = rover.position.x - 1
        break;
      default:
        //change for err?
        //rover.position.x = rover.position.x,
        //rover.position.y = rover.position.y
    }

    if (rover.position.x > 10 || rover.position.y > 10 || rover.position.x < 0 || rover.position.y < 0){
      console.log('This move is impossible.')

    rover.position.x = rover.position.x,
    rover.position.y = rover.position.y

    }
    else {
      console.log('Updated position: x: ' + rover.position.x + ' , y: ' + rover.position.y);
    }
  }

    position(){
      return 'x: ' + this.position.x + 'y: ' + this.position.y;
    }
}

const rover1 = new Rover(0,0,'N');

console.log(rover1.position); 