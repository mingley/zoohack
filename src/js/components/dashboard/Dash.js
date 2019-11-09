import React, { Component } from 'react';

class Dash extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	updateText(type, text){
		console.log(text);
		this.setState({
			type: text
		})
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
			</div>
		)
	}
}

export default Dash