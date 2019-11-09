import React, { Component } from 'react';

class Dash extends Component{
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			tag: '',
			date: ''
		}
	}

	updateText(type, text){
		console.log(text);
		this.setState({
			type: text
		})
	}

	submit(){
		const data = { 
			location: this.state.city,
			searchTerm: this.state.tag,
			date: this.state.date };

		fetch('/add', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(console.log(res));
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