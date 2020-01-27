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

    // 17.0版本以上已不推荐使用
    // componentWillMount(){
    //     console.log('1-componentWillMount----------------即将挂载')
    // }

    componentDidMount(){
        console.log('3-componentDidMount----------------挂载完成')
    }

    // 17.0版本以上已不推荐使用
    // componentWillUpdate(){
    //     console.log('4-componentWillUpdate----------------')
    // }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate----------------')
        return true
    }

    componentDidUpdate(){
        console.log('5-componentDidUpdate----------------')
    }

    render(){
        console.log('2-render----------------挂载中')
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