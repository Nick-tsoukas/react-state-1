import React, { Component } from 'react';
import Box from './Box'
import './App.css';

class ColorBox extends Component {
    render(){
        return (
            <div className="ColorBox">
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        )
    }
}

export default ColorBox;