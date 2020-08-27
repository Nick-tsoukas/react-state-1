import React, { Component } from 'react';

class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: '',
            width: '',
            height: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('adding the box now')
        this.props.addBox(this.state);
        this.setState({color: '', width: '', height: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Color</label>
                <input
                onChange={this.handleChange}
                name="color"
                type="text"
                value={this.state.color}
                ></input>
                <label>height</label>
                <input
                onChange={this.handleChange}
                name="height"
                type="text"
                value={this.state.height}
                ></input>
                <label>width</label>
                <input
                onChange={this.handleChange}
                name="width"
                type="text"
                value={this.state.width}
                ></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default BoxForm;