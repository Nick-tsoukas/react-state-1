import React, { Component } from 'react';
import BoxTwo from './BoxTwo';
import BoxForm from './BoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes : [
                {color: 'black', width: 100, height: 100},
                {color: 'blue', width: 100, height: 100}
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(box){
        this.setState((state) => ({
            boxes : [...state.boxes, box]
        }))
    }

    render(){
        return(
            <div>
                <h1>This is the box list</h1>
                {
                    this.state.boxes.map((box) => {
                        return <BoxTwo color={box.color} width={box.width} height={box.height} />
                    })
                }
                <BoxForm addBox={this.addBox} />
                <form>
                </form>
            </div>
        )
    }
}

export default BoxList;