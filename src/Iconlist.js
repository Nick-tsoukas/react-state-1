import React, { Component } from 'react';

class Iconlist extends Component {
    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'bell',
            'bolt',
            'bone',
            'bolt'
        ]
    };

    constructor(props){
        super(props);
        this.state = { icons: ['angry']};
        this.addIcon = this.addIcon.bind(this);

    }
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});
    }

    render(){
        const icons = this.state.icons.map(i => <i className={`fas fa-${i} Iconlist-padding`} />) 
        return(
            <div>
                <h1>Icons : {icons}</h1>
                <button onClick={this.addIcon}>
                    Add Icon
                </button>
            </div>
        )
    }
}

export default Iconlist;