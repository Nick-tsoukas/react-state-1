import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {username: '', email: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
       this.setState({[e.target.name] : e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({username: '', password: '', email: ''});
    }
    render(){
        return(
            <div>
                <h2>This is the form one</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" value={this.state.username} type="text" onChange={this.handleChange}/>
                    <label>email</label>
                    <input name="email" value={this.state.email} type="email" onChange={this.handleChange} />
                    <label>password</label>
                    <input name="password" value={this.state.password} type="password" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Form;