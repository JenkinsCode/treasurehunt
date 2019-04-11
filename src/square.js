import React, {Component} from 'react'
import './App.css'

class Square extends Component {

  localHandleClick = () => {
    const{ index, onClick } = this.props
    console.log("Clicked", index)
    onClick(index)
  }

  render(){
    const{ value } = this.props
    return(
      <div
      onClick = {this.localHandleClick}
      className = "square">
        {value}
      </div>
    )
  }
}

export default Square
