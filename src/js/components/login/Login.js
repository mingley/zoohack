import React from 'react';

class Login extends React.Component {
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
			<form className='container' onSubmit={this.handleSubmit}>
				<div>
					<input onChange={this.userInput} type='text' placeholder='id' id='username' onChange={this.updateID} />
					<input onChange={this.userInput} type='password' placeholder='password' id='password' onChange={this.updatePW} />
					<button type='submit' disabled={!this.validateForm()}>Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
