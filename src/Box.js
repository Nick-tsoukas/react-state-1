import React, { Component } from 'react';
import './App.css'
import { choice } from './helperBox';
class Box extends Component {
    static defaultProps = {
        allColors: ['purple', 'red', 'green', 'blue', 'magenta']
    }
    constructor(props){
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        console.log('you clicked me')
       let newColor;
       do {
           newColor = choice(this.props.allColors);
       } while (newColor === this.state.color);

       this.setState({color: newColor});
    }
    render(){
        return(
            <div onClick={this.clickHandler} style={{background: this.state.color, margin: '1em'}} className={`Box`}></div>
        )
    }
}

export default Box ;