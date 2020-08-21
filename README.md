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
        // there are many ways to bind the methods but I like this one because all methods will be writtin and bound in the constructor function at the top
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

### Random number lucky 7 game 
```javascript 
class RandomGame extends Component {
    constructor(props){
        super(props);
        this.state = { num: 0};
        this.random = this.random.bind(this);
    }
    random(){
        let random =  Math.floor(Math.random() * 10);
        this.setState({num: random});
    }
    render(){
        return (
            <div>
                <h1>random game clicker</h1>
                <p>
                    {
                        this.state.num === 7 ? "You Win with the lucky number 7" : 
                        `Your number is ${this.state.num}`
                    }
                </p>
                <button onClick={this.random}>Click Me</button>
            </div>
        )
    }
}
```


### Updating existing state using a functional approach

```javascript
class Score extends Component {
    constructor(props){
        super(props);
        this.state = {
            score : 0
        }
        this.singleKill = this.singleKill.bind(this);
    }

    singleKill(){
        this.setState(this.incrementScore);
    }
    incrementScore(curState){
        console.log('the curState is === ', curState )
        return { score: curState.score + 1 };
    }
    render() {
        return(
            <section>
                <h1>This is the score component</h1>
                <p>The Score is {this.state.score}</p>
                <button onClick={this.singleKill}>Single Kill</button>
            </section>
        )
    }
}

// function to find prime number 
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// calculating age with moment.js 
moment().diff(moment('20120507', 'YYYYMMDD'), 'years')

```

### Mutable data structures 
notes 
    - Safest way to update state is to make a copy of it and the setState with new copy of data
        - This helps debugging the app at the cost of less efficiency
        - Use pure functions 
        - Required for using redux

    - Minimize your state if data doesn't change it should be a prop
    - Try too keep state minimal 
    - State should live in the parent component ... downward data flow 

### LottoGame 
notes 
    - Simple lotto game with a reusable lotto component using props and state

```javascript 
class LottoGame extends Component {
    // we have pops like title numBalls maxNum
    constructor(props){
        super(props);
        this.state = {
            numbers : []
        }
        this.generate = this.generate.bind(this);
    }

    generate(){
        let balls = [];
        for(let i=0; i<this.props.numBalls; i++){
            balls.push(Math.floor(Math.random() * this.props.maxNum));
        }
        this.setState({numbers: balls});
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="LottoGame-balls">
                    {
                        this.state.numbers.map((n) => {
                           return <p className="LottoGame-padding">{n}</p>
                        })
                    }
                </div>
                <button onClick={this.generate}>Generate Numbers</button>
            </div>
        )
    }
}
```


### Flipcoin game 
    - notice how we update the state on coin flip

```javascript 
// here we pass in a function to setState using the st as the current state parameter
this.setState(st => {
            return {
                coin : flip,
                numFlipped: st.numFlipped + 1,
                headCount: st.headCount + (flip.side === 'heads' ? + 1 : + 0),
                tailCount: st.tailCount + (flip.side === 'tails' ? + 1 : + 0)
            }
        })

class FlipGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            numFlipped : 0,
            coin : {side: 'heads', img: 'https://www.leftovercurrency.com/wp-content/uploads/2017/04/1-singapore-dollar-coin-third-series-obverse-1.jpg'},
            headCount : 0,
            tailCount : 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin(){
        const coins = [{side: 'heads', img: 'https://www.leftovercurrency.com/wp-content/uploads/2017/04/1-singapore-dollar-coin-third-series-obverse-1.jpg'}, {side: 'tails', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Singapore_1_dollar_coin_tail.jpg'}]
        let flip = coins[Math.floor(Math.random() * 2)];
        this.setState(st => {
            return {
                coin : flip,
                numFlipped: st.numFlipped + 1,
                headCount: st.headCount + (flip.side === 'heads' ? + 1 : + 0),
                tailCount: st.tailCount + (flip.side === 'tails' ? + 1 : + 0)
            }
        })
    }


    render(){
        return (
            <div className="FlipGame-container">
                <h1>This is the coin flipping game</h1>
                <Coin side={this.state.coin} />
                <br/>
                <button onClick={this.flipCoin}>Flip A Coin</button>
                <br />
                <p>Coins flipped : {this.state.numFlipped} Heads : {this.state.headCount} Tails : {this.state.tailCount}</p>

            </div>
        )
    }
}
// Color picker 

class Box extends Component {
    static defaultProps = {
        allColors: ['purple', 'red', 'green', 'blue', 'magenta']
    }
    constructor(props){
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        console.log('you clicked me')
       let newColor;
       do {
           newColor = choice(this.props.allColors);
       } while (newColor === this.state.color);

       this.setState({color: newColor});
    }
    render(){
        return(
            <div onClick={this.clickHandler} style={{background: this.state.color, margin: '1em'}} className={`Box`}></div>
        )
    }
}
```

### notes 
    - attach event handlers to compnents in react 
    - Use method binding to preserve the this context with event handlers
    - Pass event handlers down to child components as props
    - Understand the key prop when using map
