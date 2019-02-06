class Rover {
  constructor(positionX, positionY, direction) {

    this.position.x = positionX;
    this.position.y = positionY;

    this.direction = direction;
  }

  getPositionX(){
    return this.position.x;
  }

  getPositionY(){
    return this.position.y;
  }

  getDirection(){
    return this.direction;
  }

  //Method to turn left
  turnLeft() {
    switch(this.direction) {
        case 'N':
            this.direction = 'W'
          break;
        case 'E':
            this.direction = 'N'
          break;
        case 'S':
            this.direction = 'E'
          break;
        case 'W':
            this.direction = 'S'
          break;
        default:
          //change for err?
          this.direction = this.direction
      }

      console.log('New direction: ' + this.direction)
  }

  //Method to turn right
  turnRight() {
  switch(this.direction) {
      case 'N':
          this.direction = 'E'
        break;
      case 'E':
          this.direction = 'S'
        break;
      case 'S':
          this.direction = 'W'
        break;
      case 'W':
          this.direction = 'N'
        break;
      default:
        //change for err?
          this.direction = this.direction
    }

    console.log('New direction: ' + rover.direction)
  }

  //Method to move forward
  move(){
  switch(this.direction) {
      case 'N':
        this.position.y = this.position.y + 1
        break;
      case 'E':
      this.position.x = this.position.x + 1
        break;
      case 'S':
      this.position.y = this.position.y - 1
        break;
      case 'W':
      this.position.x = this.position.x - 1
        break;
      default:
        //change for err?
        //rover.position.x = rover.position.x,
        //rover.position.y = rover.position.y
    }

    if (this.position.x > 10 || this.position.y > 10 || this.position.x < 0 || this.position.y < 0){
      console.log('This move is impossible.')

    this.position.x = this.position.x,
    this.position.y = this.position.y

    }
    else {
      console.log('Updated position: x: ' + this.position.x + ' , y: ' + this.position.y);
    }
  }


}

const rover1 = new Rover(0,0,'N');



//module.exports.Rover = Rover;