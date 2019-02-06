class plateau {

  constructor(sizeX, sizeY){
    this.sizeX = sizeX;
    this.sizeY = sizeY
  }

  setNewX(newSizeX){
    this.sizeX = newSizeX;
  }

}

function changePlateauSize(newX, newY){

}

class Rover {

  constructor(positionX, positionY, direction) {

    this.positionX = positionX;
    this.positionY = positionY;

    this.direction = direction;
  }

  getPositionX(){
    return this.positionX;
  }

  getPositionY(){
    return this.positionY;
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

    console.log('New direction: ' + this.direction)
  }

  //Method to move forward
  move(){
  switch(this.direction) {
      case 'N':
        this.positionY = this.positionY + 1
        break;
      case 'E':
      this.positionX = this.positionX + 1
        break;
      case 'S':
      this.positionY = this.positionY - 1
        break;
      case 'W':
      this.positionX = this.positionX - 1
        break;
      default:
        //change for err?
        //rover.position.x = rover.position.x,
        //rover.position.y = rover.position.y
    }

    if (this.positionX > plateau.sizeX || this.positionY > plateau.sizeY || this.positionX < 0 || this.positionY < 0){
      console.log('This move is impossible.')

    this.positionX = this.positionX,
    this.positionY = this.positionY

    }
    else {
      console.log('Updated position: x: ' + this.positionX + ' , y: ' + this.positionY);
    }
  }
}

function sendInstruction(rover){
  //Insert instruction 
  

 
}



module.exports.Rover = Rover;
module.exports.plateau = plateau;