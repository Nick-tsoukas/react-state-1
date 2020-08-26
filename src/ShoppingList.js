import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {name: 'Milk', qty: '3 gallons'},
                {name: 'Bread', qty: '1 loaf'}
            ]
        }
        this.addItem = this.addItem.bind(this);
        
    }

    addItem(item){
       this.setState((state) => ({
           items: [...state.items, item]
       }));
    }

    renderItems(){
        return (
            <ul>
                {
                    this.state.items.map((item) => {
                        return <li>{item.name} {item.qty}</li>
                    })
                }
            </ul>
        )
    }

    render(){
        return(
            <div>
                <h1>This is the shopping list</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }
}

export default ShoppingList;