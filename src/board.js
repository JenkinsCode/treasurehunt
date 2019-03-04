import React, { Component } from 'react'
import Square from './square'
import './App.css'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares: ['?', '?', '?',
                '?', '?', '?',
                '?', '?', '?']
    }
  }
  render() {
    const{ squares } = this.state
    return(
      <div className = 'board'>
      {squares.map((squareValue, index)=>{
        return (<Square
                key = {index}
                value = {squareValue}
                index = {index}
          />
        )
      })}
      </div>
    )
  }
}

export default Board
