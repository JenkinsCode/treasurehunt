import React, { Component } from 'react'
import Square from './square'
import './App.css'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: []
    }
  }

  componentDidMount(){
    this.setupGame()
  }
  setupGame = () =>{
    const chest= Math.floor(Math.random()*8)

    do{
      var bomb = Math.floor(Math.random()*8)
    } while (bomb === chest)

    this.setState({
      squares: ['?', '?', '?',
                '?', '?', '?',
                '?', '?', '?'],
      bombIndex: bomb,
      chestIndex: chest,
      clickCount: 0,
      gameIsLost: false,
      gameIsWon: false,
    })
  }



  squareAssignment = (index) => {
    const{bombIndex, chestIndex, squares} = this.state
    if(index === bombIndex){
      return 'ROCK'
    } else if(index === chestIndex){
      return 'TREASURE'
    } else {
      return 'TREE'
    }
  }

  gameIsActive = () => {
    const {clickCount, gameIsWon, gameIsLost } = this.state
    return clickCount < 2 && !gameIsWon && !gameIsLost
  }

  flipSquare = (index) => {
    const {squares}= this.state
    const newValue = this.squareAssignment(index)
    squares[index] = newValue
    this.setState({
      squares: squares
    })
  }

  flipAllSquares = () =>{
    const {squares} = this.state
    squares.forEach((square, index)=>{
    this.flipSquare(index)
  })
}

  handleSquareClick = (index)=>{
   const{ squares, clickCount } = this.state
   if(squares[index] !== '?'){
      return
    }

    if(this.gameIsActive() && squares[index] === '?'){
      const newValue = this.squareAssignment(index)
      this.flipSquare(index)
      this.setState({
        clickCount: clickCount + 1,
        gameIsWon: newValue === 'c',
        gameIsLost: newValue === 'b',
      })
    } else if(clickCount >= 2){
      this.setState({gameIsLost: true})
    }
  }

  render() {
    const{ gameIsLost, gameIsWon, squares } = this.state
    return(
      <div>
        {gameIsLost &&
          <h1> You lose!</h1>
        }
        {gameIsWon &&
        <h1>You Win!</h1>
        }
        <div className = 'board'>
        {squares.map((squareValue, index)=>{
          return (<Square
                  key = {index}
                  value = {squareValue}
                  index = {index}
                  onClick = {this.handleSquareClick}
            />
          )
        })}
        </div>
        <button
          onClick={this.flipAllSquares}
          >
          give up?
          </button>

        <button
          onClick={this.setupGame}
          >
          reset the game!
          </button>
      </div>
    )
  }
}

export default Board
