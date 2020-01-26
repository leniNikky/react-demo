import React, {Component,Fragment} from 'react'
import MealItem from './MealItem'

class OrderMeal extends Component{
    constructor(props){
        //使用父类方法
        super(props)
        this.state = {
            inputValue:'',
            list:['宫保鸡丁','海鲜意面']
        }
    }

    render(){
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.listChange.bind(this)}>增加餐品</button>
                <ul className="li-list">
                    {this.state.list.map((item,index)=>{
                        return (
                                <MealItem 
                                    content={item} 
                                    index={index} 
                                    key={index+item}
                                    deleteItem={this.deleteItem.bind(this,index)}/>
                        )
                    })}
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        // console.log(e.target.value)
        // 未bind时，this为undefined，绑定完this时OrderMeal
        // console.log(this)
        this.setState({
            inputValue:e.target.value
        })
    }

    listChange(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }

    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default OrderMeal