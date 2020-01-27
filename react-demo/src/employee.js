import React, { Component } from 'react';
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleState: true
        }
        this.toggleFunc = this.toggleFunc.bind(this)
    }
    render() { 
        return ( 
            <div>
                <h3 className={this.state.toggleState?'show':'hide'}>Lucy</h3>
                <button onClick={this.toggleFunc}>toggle</button>
            </div>
         );
    }
    toggleFunc(){
        this.setState({
            toggleState:!this.state.toggleState
        })
    }
}
 
export default Employee;