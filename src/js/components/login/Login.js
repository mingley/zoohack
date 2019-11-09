import React from 'react';

class Login extends React.Component {

	render() {
		return (
			<form className='center' onSubmit={this.props.handleSubmit}>
				<div className='center'>
					<input onChange={this.props.userInput} type='text' placeholder='id' id='username' onChange={this.props.updateID} />
				</div>
				<div className='center'>
					<input type='password' placeholder='password' id='password' onChange={this.props.updatePW} />
				</div>
				<div className='center'>
					<button type='submit' disabled={!this.props.validateForm()}>Login</button>
				</div>
			</form>
		);
	}
}

export default Login;
