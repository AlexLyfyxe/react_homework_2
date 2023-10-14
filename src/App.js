import React from "react";

class Squares extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squareColor: 'red'
    }
  }

  squareClick = () => {
    this.setState((state) => ({
      squareColor: state.squareColor === 'red' ? 'green' : 'red'
    }))
  }

  render() {
    return (
      <div className='container'>
        <div className='square_block'
          style={{
            backgroundColor: this.state.squareColor,
          }}
          onClick={this.squareClick}
        ></div>
        <div className='square_block'
          style={{
            backgroundColor: this.state.squareColor === 'red' ? 'green' : 'red',
          }}
          onClick={this.squareClick}
        ></div>
      </div>
    )
  }
}

export default Squares
