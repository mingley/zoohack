import React from 'react';

export default class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			submitStatusMessage: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
    const data = { 
			fullName: document.getElementById('newUserName').value,
			username: document.getElementById('newUserEmail').value,
			password: document.getElementById('newUserPassword').value
		}
		this.setState({
			submitStatusMessage: ''
		});

    fetch('/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
		.then(res => {
			if(res.ok){
				return res.json()
			} else {
				throw new Error("Error creating account, please try again.");
			}
		})
		.then(res => {
			if(res.status === 200){
				this.setState({
					submitStatusMessage: 'Success!'
				})
				this.resetFields();
			}
		})
		.catch(error => this.setState({submitStatusMessage: error}))
	}
	
	resetFields(){
		document.getElementById('newUserName').value = '';
		document.getElementById('newUserEmail').value = '';
		document.getElementById('newUserPassword').value = '';
	}

	render(){
		return (
			<div className='adminContainer'>
				<h2>Add Account</h2>
				<input className='textInput' id='newUserName' placeholder='Full Name' />
				<input className='textInput' id='newUserEmail' placeholder='Email Address' />
				<input className='textInput' id='newUserPassword' placeholder='Password' />
				<div className='button' id='submitNewUser' onClick={this.handleSubmit}>Submit</div>
				<div>{this.state.submitStatusMessage}</div>
			</div>
		)
	}
}