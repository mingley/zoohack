import React, { Component } from 'react';

class Dash extends Component{
    constructor(props) {
        super(props);
        this.state = {
            targets: [],
            input_target:{
                name: 'none',
                isFlagged: false
            }
        }
      }

      //all of these work but are inactivated while not connected to db

    // componentDidMount(){
    //    this.getTargets();
    // }

    // getTargets = _ => {
    //     fetch('http://localhost:3000/search')
    //     .then(response => response.json())
    //     .then(response => this.setState({ targets: response.data}))
    //     .catch(err => console.error(err))
    // }

    // addTarget = _ => {
    //     const { input_target } = this.state;
    //     fetch(`http://localhost:3000/update?name=${input_target.name}&isFlagged=${input_target.isFlagged}`)
    //     .then(this.getTargets)
    //     .catch(err => console.error(err))
    // }

    // renderTarget = ({ targetName, isFlagged}) => <div key={targetName}>{isFlagged}</div>

    render(){
        const { targets, input_target } = this.state;
    return(
        <div className="targets">
            {/* {targets.map(this.renderTarget)} */}
            <div>
                <p>-----these are for testing inputting data into the db---</p>
                <input 
                value={input_target.name}
                onChange={e => this.setState({ input_target: {... input_target, name: e.target.value}})} />
                <input 
                value={input_target.isFlagged}
                onChange={e => this.setState({ input_target: {... input_target, isFlagged: e.target.value}})}  />
                <button onClick={this.addTarget}>Add Target</button>
            </div>
        </div>
    )
 }
}

export default Dash