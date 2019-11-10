import React from 'react';

export default class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			submitStatusMessage: ''
		}
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
			if(res.status === "success"){
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
				<input id='newUserName' placeholder='Full Name' />
				<input id='newUserEmail' placeholder='Email Address' />
				<input id='newUserPassword' placeholder='Password' />
				<div id='submitNewUser' onClick={this.handleSubmit}>Submit</div>
				<div>{this.state.submitStatusMessage}</div>
			</div>
		)
	}
}