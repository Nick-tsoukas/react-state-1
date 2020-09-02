import React, { Component } from 'react';
import axios from "axios";
class GitHubUserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', img : '', isLoading: true};
    }

    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({img : data.avatar_url, name: data.name, isLoading: false })
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        <img alt="user profile" src={this.state.img} />
                        <p> {this.state.name} </p>
                    </div>
                )}
                
            </div>
        )
    }
}

export default GitHubUserInfo;