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
		this.submitLogin = this.submitLogin.bind(this);
	}

	submitLogin(){
		if(this.state.username && this.state.password){
			this.props.handleSubmit(this.state.username, this.state.password);
		}
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
				<h2>{text.greeting}</h2>
				<hr></hr>
				<div>
					<input className='textInput' onChange={this.updateID} type='text' placeholder={text.email} id='username' onKeyUp={(e) => {if(e.key === 'Enter'){this.submitLogin()}}} />
				</div>
				<div>
					<input className='textInput' onChange={this.updatePW} type='password' placeholder={text.password} id='password' onKeyUp={(e) => {if(e.key === 'Enter'){this.submitLogin()}}} />
				</div>
				<div>
					<div className='button' onClick={() => this.submitLogin()} type='submit' disabled={!this.validateForm()}>{text.login}</div>
				</div>
				<div className='loginError'>
					{this.props.error ? "Username or password is incorrect." : ''}
				</div>
			</form>
		);
	}
}

export default Login;
