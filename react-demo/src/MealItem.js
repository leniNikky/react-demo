import React, { Component } from 'react'
import PropTypes from 'prop-types'
class MealItem extends Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() { 
        return ( 
        <li onClick={this.deleteItem}>${this.props.price} {this.props.content}</li>
         );
    }

    deleteItem(){
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

MealItem.propTypes = {
    price:PropTypes.number.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

MealItem.defaultProps = {
    price:1000
}
 
export default MealItem