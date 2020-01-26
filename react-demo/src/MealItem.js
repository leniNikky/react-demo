import React, { Component } from 'react'
class MealItem extends Component {
    render() { 
        return ( 
            <li>{this.props.content}</li>
         );
    }
}
 
export default MealItem