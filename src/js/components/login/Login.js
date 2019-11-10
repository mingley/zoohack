import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
		this.validateForm = this.validateForm.bind(this);
		this.updateID = this.updateID.bind(this);
		this.updatePW = this.updatePW.bind(this);
	}

	validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

	updateID(event) {
		this.setState({ username: event.target.value });
	}

	updatePW(event) {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<form className='center' onSubmit={this.props.handleSubmit}>
				<h5>Welcome</h5>
				<hr></hr>
				<div>
					<input onChange={this.updateID} type='text' placeholder='id' id='username' />
				</div>
				<div>
					<input onChange={this.updatePW} type='password' placeholder='password' id='password' />
				</div>
				<div>
					<div onClick={() => this.props.handleSubmit(this.state.username, this.state.password)} type='submit' disabled={!this.validateForm()}>Login</div>
				</div>
			</form>
		);
	}
}

export default Login;
