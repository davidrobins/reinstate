import React, { Component } from 'react';
import rows from './rows';
import Row from './Row';

class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {
            showRows: true
        }
        this.toggleShowHide = this.toggleShowHide.bind(this);
    }
    buildRows(rows) {
        return rows.map(row => (
            <Row row={row} />
        ))
    }
    toggleShowHide(){
        this.setState(prevState => ({
            showRows: !this.state.showRows
        }))
    }
    render(){
        return (
            <React.Fragment>
                <h2>Rows</h2>
                <ul>{this.state.showRows && this.buildRows(rows)}</ul>
                <button onClick={this.toggleShowHide}>
                    {this.state.showRows ? 'Hide' : 'Show'}
                </button>
            </React.Fragment>
        )
    }
}

export default Tab;