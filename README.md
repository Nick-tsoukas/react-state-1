This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Creating state
    simple example of creating state with a constructor function in react. Calling super is nessasary and gets the value of this. It can be done without the constructor function using bable

Notes
    - Anytime state updates the component will rerender
    - Learn about react events. State most commonly changes in direct response to some event
    - JSX element has built in attributes representing every kind of browser event the events are camelCase

```javascript 
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score : 100,
            gameOver : false;
        }
    }
}

// =============== example of binding this to functions to change state

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        // must bind this to handleClick function using bind() sets the context to the click function
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({clicked : true });
    }
    render(){
        return(
            <div>
                <h1>{this.state.clicked ? 'This button has been clicked' : 'Not yet clicked'}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

```