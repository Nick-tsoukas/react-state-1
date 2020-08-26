import React, { Component } from 'react';

class NumberItem extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.remove(this.props.value);
    }
    render(){
        return(
            <div>
                <h2>value : {this.props.value}</h2>
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default NumberItem;