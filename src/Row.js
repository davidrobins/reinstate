import React, { Component } from 'react';

class Row extends Component {
    constructor(props){
        super(props);
        this.state = { open: false }
        this.toggleOpen = this.toggleOpen.bind(this)
    }
    toggleOpen() {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        return (
            <li className={this.props.row.sku} onClick={this.toggleOpen}>
            {this.props.row.label} - {this.state.open ? 'open' : 'closed'}
            </li>
        )
    }
}

export default Row;