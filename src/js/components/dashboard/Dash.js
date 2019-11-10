import React, { Component } from 'react';

class Dash extends Component{
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			tag: '',
			date: ''
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
		console.log(data);
		fetch('/add', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(res => console.log(res));

		function parseDate(text){
			let [month, day, year] = text.split('-');
			return new Date(year, month, day);
		}
	}

	render(){
		return (
			<div className='dashboardContainer'>
				<div className='dashboardRow'>
					Working in city/area: 
					<input type='text' onInput={(e) => this.updateText('city', e.target.value)} />
				</div>
				<div className='dashboardRow'>
					Working on: 
					<input type='text' onInput={(e) => this.updateText('tag', e.target.value)} />
				</div>
				<div className='dashboardRow'>
					Until:
					<input type='date' onInput={(e) => this.updateText('date', e.target.value)} />
				</div>
				<button type='submit' onClick={() => this.submit()}>Submit</button>
			</div>
		)
	}
}

export default Dash