import React, { Component } from 'react';

class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            qty: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: '',
            qty: ''
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="ShoppingListForm">

                <label>Name</label>
                <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                ></input>

                <label>Qty</label>
                <input
                id="qty"
                name="qty"
                type="text"
                value={this.state.qty}
                onChange={this.handleChange}
                ></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default ShoppingListForm;