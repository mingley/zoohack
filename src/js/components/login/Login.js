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
		const {text} = this.props;
		return (
			<form className='center'>
				<h5>{text.greeting}</h5>
				<hr></hr>
				<div>
					<input onChange={this.updateID} type='text' placeholder={text.email} id='username' />
				</div>
				<div>
					<input onChange={this.updatePW} type='password' placeholder={text.password} id='password' />
				</div>
				<div>
					<div onClick={() => this.props.handleSubmit(this.state.username, this.state.password)} type='submit' disabled={!this.validateForm()}>{text.login}</div>
				</div>
			</form>
		);
	}
}

export default Login;
