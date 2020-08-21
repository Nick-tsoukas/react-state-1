import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props);
        this.state = {
            score : 0
        }
        this.singleKill = this.singleKill.bind(this);
    }

    singleKill(){
        this.setState(this.incrementScore);
    }
    incrementScore(curState){
        console.log('the curState is === ', curState )
        return { score: curState.score + 1 };
    }
    render() {
        return(
            <section>
                <h1>This is the score component</h1>
                <p>The Score is {this.state.score}</p>
                <button onClick={this.singleKill}>Single Kill</button>
            </section>
        )
    }
}

export default Score;