import React, { Component } from 'react';

class Dice extends Component {
    render(){
        return (
            <div>
                 <i className={`fas fa-dice-${this.props.number} Dice-padding`}></i>
            </div>
        )
    }
}

export default Dice;