import React from 'react';
import Login from './components/login/Login'
import Dash from './components/dashboard/Dash'
import languages from './languages.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			loggedIn: false,
			currentLanguageName: 'English',
			text: languages['English'].index
    }
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleLanguageChange(newLanguage){
		console.log(newLanguage);
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
			.then(res => res.json())
			.then(res => {
				if(res.status === "success"){
					this.setState({
						loggedIn: true
					})
				}
			})
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  render() {
		const { text } = this.state;
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
				</div>
				<div className='mainContainer'>
					{ this.state.loggedIn ? 
						<Dash text={languages[this.state.currentLanguageName].dashboard} /> :
						<Login handleSubmit={this.handleSubmit} text={languages[this.state.currentLanguageName].login} />
					}
				</div>
      </div>
    );
  }
}

export default App;

