import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            score : 0,
            gameOver : false
        }
    }
    render(){
        return (
           <div>
               <h1>The Score is {this.state.score}</h1>
               <h2>{this.state.gameOver ? "Game is over" : "Its time to play"}</h2>
           </div>
        )
    }
}

export default Game ;