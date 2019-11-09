import React, { Component } from 'react';

class Dash extends Component{
    constructor(props) {
        super(props);
        this.addTarget = this.addTarget.bind(this);
        this.state = {
            input_target:{
                tag: 'none',
                location: false
            }
        }
      }

    addTarget(){
        const input_target = this.state.input_target
        fetch('/add', {  
            method: 'POST',   
            body: JSON.stringify(input_target)
        })
        .then(function (data) {  
        console.log('Request success: ', data);  
        })  
        .catch(function (error) {  
        console.log('Request failure: ', error);  
        });
    }

    render(){
        const { input_target } = this.state;
    return(
        <div className="targets">
            <div>
                <p>-----these are for testing inputting data into the db---</p>
                <input 
                value={input_target.tag}
                onChange={e => this.setState({ input_target: {... input_target, tag: e.target.value}})} />
                <input 
                value={input_target.location}
                onChange={e => this.setState({ input_target: {... input_target, location: e.target.value}})}  />
                <button onClick={this.addTarget}>Add Target</button>
            </div>
        </div>
    )
 }
}

export default Dash