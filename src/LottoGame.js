import React, { Component } from 'react';

class LottoGame extends Component {
    // we have pops like title numBalls maxNum
    constructor(props){
        super(props);
        this.state = {
            numbers : []
        }
        this.generate = this.generate.bind(this);
    }

    generate(){
        let balls = [];
        for(let i=0; i<this.props.numBalls; i++){
            balls.push(Math.floor(Math.random() * this.props.maxNum));
        }
        this.setState({numbers: balls});
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="LottoGame-balls">
                    {
                        this.state.numbers.map((n) => {
                           return <p className="LottoGame-padding">{n}</p>
                        })
                    }
                </div>
                <button onClick={this.generate}>Generate Numbers</button>
            </div>
        )
    }
}

export default LottoGame;