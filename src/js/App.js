import React from 'react';
import Login from './components/login/Login'
import Dash from './components/dashboard/Dash'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(username, password) {
    const data = { username: username, password: password }

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {
    return (
      <div>
        <Login handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

