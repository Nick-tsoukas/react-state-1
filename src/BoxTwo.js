import React, { Component } from 'react';

class BoxTwo extends Component {
    render(){
        return (
            <div
            style={{
                width: `${this.props.width}px`,
                height: `${this.props.height}px`,
                backgroundColor: `${this.props.color}`
            }}
            ></div>
        )
    }
}

export default BoxTwo;