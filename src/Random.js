import React, { Component } from 'react';

class Random extends Component {
    constructor(props){
        super(props);
        this.state = { num: 0};
        // this.timer();
    }
    timer(){
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({num: rand})
        },1000)
    }
    render(){
        return(
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}

export default Random;