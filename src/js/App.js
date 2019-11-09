import React from 'react';
import { Login } from './components/login/Login'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this); 
      }

    render(){
        return(
        <p>app component</p>
        )
    }
}

export default App;