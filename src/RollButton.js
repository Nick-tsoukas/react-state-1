import React, { Component } from 'react';

class RollButton extends Component {
    render(){
        return (
            <div>
                <button disabled={this.props.rollingNow} onClick={this.props.handler}>
                {this.props.rollingNow ? 'rolling the dice' : 'Roll the dice'}
                </button>
            </div>
            
        )
    }
}

export default RollButton;