import React, { Component } from 'react'
import PropTypes from 'prop-types'
class MealItem extends Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }

    // 组件第一次存在于dom中，不会执行
    // 如果已经存在dom中，函数才会执行
    UNSAFE_componentWillReceiveProps(){
        console.log('UNSAFE_componentWillReceiveProps')
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