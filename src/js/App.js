import React from 'react';
import { Login } from './components/login/Login'
import Dash from './components/dashboard/Dash'

class App extends React.Component {
    constructor(props) {
      super(props);
        this.state = {

        }
    }
  
    render() {
      return (
        <div>
            <h1>this is the main app component</h1>
            <Login />
        </div>
      );
    }
  }

export default App;

