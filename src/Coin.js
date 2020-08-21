import React, { Component } from 'react';
import './App.css'

class Coin extends Component {
    render(){
        return (
            <img className="Coin-image" src={this.props.side.img} />
        )
    }
}

export default Coin;