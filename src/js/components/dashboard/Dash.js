import React, { Component } from 'react';

class Dash extends Component{
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			tag: '',
			date: '',
			results: []
		}
		this.updateText = this.updateText.bind(this);
		this.submit = this.submit.bind(this);
	}

	updateText(type, text){
		this.setState({
			[type]: text
		})
	}

	submit(){
		const data = { 
			location: this.state.city,
			searchTerm: this.state.tag,
			date: parseDate(this.state.date).getTime()
		};
		fetch('/add', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => {
			this.setState({
				results: res.results || [],
				city: '',
				date: '',
				tag: ''
			})
		});
		function parseDate(text){
			let [year, month, day] = text.split('-');
			return new Date(year, month-1, day);
		}
	}

	render(){
		const { text } = this.props;
		return (
			<div className='dashboardContainer'>
				<div className='dashboardRow'>
					{text.location}: 
					<input type='text' class='textInput' onInput={(e) => this.updateText('city', e.target.value)} value={this.state.city} />
				</div>
				<div className='dashboardRow'>
					{text.searchTerm}: 
					<input type='text' class='textInput' onInput={(e) => this.updateText('tag', e.target.value)} value={this.state.tag} />
				</div>
				<div className='dashboardRow'>
					{text.expiration}:
					<input type='date' class='textInput' onInput={(e) => this.updateText('date', e.target.value)} value={this.state.date} />
				</div>
				<button type='submit' class='button' onClick={() => this.submit()}>{text.submit}</button>
				
				<div className='resultsContainer'>
					{
						this.state.results.map(result => {
							return(
								<div className='searchTermResultRow'>
									{text.notification.replace('{name}', result.fullName).replace('{email}', result.email)}
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Dash