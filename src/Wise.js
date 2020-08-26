import React, { Component } from 'react';

class Wise extends Component {
    dispenseWisdom(){
        let messages = [
            'Hello how are you',
            'what do you think we should do today',
            'Lets eat some dinner and drink a beer',
            'watch out for bears!'
        ]
        let ind = Math.floor(Math.random() * messages.length);
        console.log(messages[ind])
    }
    render(){
        return (
            <div onClick={this.dispenseWisdom} className="Wise">😀</div>
        )
    }
}

export default Wise;