import React, {Component} from 'react'

class App extends Component{
    render(){
        return(
            <ul className="li-list">
                <li>{true? 'true':'false'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}

export default App