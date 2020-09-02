import React, { Component } from 'react';
import axios from 'axios';

class Zen extends Component {
    constructor(props){
        super(props);
        this.state = { quote: ''};

    }
    componentDidMount(){
        //  load date from api 
        //  set the state with that data this is the right place and time to get data and set state
       axios.get("https://api.github.com/zen")
            .then(response => {
                this.setState({quote : response.data})
            })

    }
    render(){
        return(
            <div>
                <h1>{this.state.quote}</h1>
            </div>
        )
    }
}

export default Zen;