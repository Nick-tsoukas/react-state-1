import React, { Component } from 'react';

class RandomGame extends Component {
    constructor(props){
        super(props);
        this.state = { num: 0};
        this.random = this.random.bind(this);
    }
    random(){
        let random =  Math.floor(Math.random() * 10);
        this.setState({num: random});
    }
    render(){
        return (
            <div>
                <h1>random game clicker</h1>
                <p>
                    {
                        this.state.num === 7 ? "You Win with the lucky number 7" : 
                        `Your number is ${this.state.num}`
                    }
                </p>
                <button onClick={this.random}>Click Me</button>
            </div>
        )
    }
}

export default RandomGame;