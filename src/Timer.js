import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        console.log('in consturctor');
        this.state = {time : new Date()}
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({time : new Date()})
        },1000);
    }

    render(){
        console.log("in the render function")
        return(
            <div>
                <h1>{this.state.time.getSeconds() }</h1>
            </div>
        )
    }
}

export default Timer;