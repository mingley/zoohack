import React from 'react';
import Login from './components/login/Login'
import Dash from './components/dashboard/Dash'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.updateID = this.updateID.bind(this);
    this.updatePW = this.updatePW.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateID(event) {
    this.setState({ username: event.target.value });
  }

  updatePW(event) {
    this.setState({ password: event.target.value });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { username: this.state.username, password: this.state.password }
        
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
        <h1 >this is the main app component</h1>
        <Login updateID={this.updateID} updatePW={this.updatePW} validateForm={this.validateForm} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

