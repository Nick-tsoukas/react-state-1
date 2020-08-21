import React, { Component } from 'react';
import RollButton from './RollButton';
import Dice from './Dice';
import Random from './helper';
import random from './helper';

//  I need to create state here and when the button is clicked change the text to rolling for 2 seconds
class Rolldice extends Component {
    constructor(props){
        super(props);
        this.state = {
            rolling : false,
            diceOne : 'one',
            diceTwo : 'one'
        }
        this.rolling = this.rolling.bind(this);
    }
     rolling(){
       this.setState( {rolling : true, } );

       setTimeout(() => {
        this.setState(
            {
                rolling : false,
                diceOne : random(),
                diceTwo : random()
            }
            )
       },2000);

    }
    render(){
        return (
            <div>
                <section className="Rolldice-container">
                <Dice rollingNow={this.state.rolling} number={this.state.diceOne} />
                <Dice rollingNow={this.state.rolling} number={this.state.diceTwo} />
                </section>
                <RollButton rollingNow={this.state.rolling} handler={this.rolling} />
            </div>
        )
    }
}

export default Rolldice;