This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Creating state
    simple example of creating state with a constructor function in react. Calling super is nessasary and gets the value of this. It can be done without the constructor function using bable

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

```