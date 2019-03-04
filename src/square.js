import React, {Component} from 'react'
import './App.css'

class Square extends Component {
  render(){
    const{ value } = this.props
    return(
      <div className = "square">
      
      {value}
      </div>
    )
  }
}

export default Square
