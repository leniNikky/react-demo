import React, { Component } from 'react'
class MealItem extends Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.deleteItem}>{this.props.content}</li>
         );
    }

    deleteItem(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
export default MealItem