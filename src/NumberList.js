import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = { nums: [1,2,3,4,5,6]};
        this.remove = this.remove.bind(this);
    };

    remove(num){
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }

    render(){
        return(
            <div>
                <h1>This is the Number List</h1>
                {
                    this.state.nums.map((n) => {
                        return <NumberItem value={n} remove={this.remove} />
                    })
                }
            </div>
        )
    }
}

export default NumberList;