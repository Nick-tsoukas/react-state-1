import React, { Component } from 'react';
import axios from 'axios';

class Zen extends Component {
    constructor(props){
        super(props);
        this.state = { quote: '...', loading: true};

    }
    componentDidMount(){
        //  load date from api 
        //  set the state with that data this is the right place and time to get data and set state
        //  why not do this in the consturctor 
        // docs recomend that component did mount is the right place to get data and set state. Don't set state in constructor 

       axios.get("https://api.github.com/zen")
            .then(response => {
                setTimeout(() => {
                    this.setState({quote: response.data, loading: false})
                }, 3000)
            })

    }
    render(){
        return(
            <div>
                {this.state.loading ? (
                    <div className="loader"></div>
                ) : (
                    <h1>{this.state.quote}</h1>
                )}
            </div>
        )
    }
}

export default Zen;