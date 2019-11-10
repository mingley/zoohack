import React from 'react';
import Login from './components/login/Login';
import Dash from './components/dashboard/Dash';
import Admin from './components/admin/Admin';
import languages from './languages.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			loggedIn: false,
			isAdmin: false,
			currentLanguageName: 'English',
			text: languages['English'].index,
			showAdminPanel: false,
			loginErrorMessage: ''
    }
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
		this.toggleAdminSettings = this.toggleAdminSettings.bind(this);
	}

	toggleAdminSettings(status){
		this.setState({
			showAdminPanel: status
		})
	}
	
	handleLanguageChange(newLanguage){
		console.log(this.state);
		this.setState({
			currentLanguageName: newLanguage,
			text: languages[newLanguage].index
		});
	}

  handleSubmit(username, password) {
    const data = { username: username, password: password }

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
			.then(res => {
				if(res.ok){
					return res.json()
				} else {
					if(res.status === 401){
						throw new Error('Unable to log in, incorrect username or password.');
					} else {
						throw new Error("Error in logging in");
					}
				}
			})
			.then(res => {
				if(res.status === "success"){
					this.setState({
						loggedIn: true,
						isAdmin: res.isAdmin
					})
				}
			})
      .catch(error => this.setState({loginErrorMessage: error}))
  }

  render() {
		const { text } = this.state;
		let adminLink = null;
		if(this.state.isAdmin){
			if(this.state.showAdminPanel){
				adminLink = (
					<div className='adminLink' onClick={() => this.toggleAdminSettings(false)}>Hide Admin Settings</div>
				)
			} else {
				adminLink = (
					<div className='adminLink' onClick={() => this.toggleAdminSettings(true)}>Show Admin Settings</div>
				)
			}
		}

    return (
      <div>
				<div className='header'>
					{text.language}:<select id='languages' onChange={(e) => this.handleLanguageChange(e.target.value)}>
						{
							Object.keys(languages).map(language => {
								return (
									<option value={language} selected={language === this.state.currentLanguage}>{language}</option>
								)
							})
						}
					</select>
					{
						adminLink
					}
				</div>
				<div className='mainContainer'>
					{ this.state.loggedIn ? 
						this.state.showAdminPanel ? 
							<Admin /> : 
							<Dash text={languages[this.state.currentLanguageName].dashboard} /> :
						<Login error={this.state.loginErrorMessage} handleSubmit={this.handleSubmit} text={languages[this.state.currentLanguageName].login} />
					}
				</div>
      </div>
    );
  }
}

export default App;

