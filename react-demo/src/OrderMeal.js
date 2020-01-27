import React, {Component,Fragment} from 'react'
import MealItem from './MealItem'
import Axios from 'axios'
import Employee from './employee'
import './style.css'

class OrderMeal extends Component{
    constructor(props){
        //使用父类方法
        super(props)
        this.state = {
            inputValue:'',
            list:['宫保鸡丁','海鲜意面']
        }
    }

    UNSAFE_componentWillMount(){
        Axios.get('https://www.easy-mock.com/mock/5e2e732cefe660215074f38e/react-demo/getList')
        .then((res)=>{
            // console.log('data:'+JSON.stringify(res.data))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{console.log(error)})
    }

    render(){
        return (
            <Fragment>
                <input ref={(input)=>{this.input = input}} value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>增加餐品</button>
                <ul ref={(ul)=>{this.ul = ul}} className="li-list">
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
                <Employee/>
            </Fragment>
        )
    }

    inputChange(e){
        // console.log(e.target.value)
        // 未bind时，this为undefined，绑定完this时OrderMeal
        // console.log(this)
        this.setState({
            inputValue:this.input.value
        })
    }

    addItem(){
        // setState后可接回调函数，解决异步问题
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
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