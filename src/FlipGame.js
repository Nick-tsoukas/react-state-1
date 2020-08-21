import React, { Component } from 'react';
import Coin from './Coin';

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

export default FlipGame;