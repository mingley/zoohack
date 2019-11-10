import React from 'react';

class Login extends React.Component {

	render() {
		return (
			<form className='center' onSubmit={this.props.handleSubmit}>
				<h5>Login</h5>
				<hr></hr>
				<div>
					<input onChange={this.props.userInput} type='text' placeholder='id' id='username' onChange={this.props.updateID} />
				</div>
				<div>
					<input type='password' placeholder='password' id='password' onChange={this.props.updatePW} />
				</div>
				<div>
					<button type='submit' disabled={!this.props.validateForm()}>Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
