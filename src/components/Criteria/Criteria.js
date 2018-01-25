import React, { Component } from 'react';

class Criteria extends Component {
    // constructor(props){
    //     super()
    //     this.state = {
    //         status: 0
    //     }
    //     // this.handleChange = this.handleChange.bind(this); // needed if you don't use an arrow function to create handleChange
    // }

    // function that gets called when the selection in the dropdown changes
    // changes the state to the new selection

    handleChange = (event)=>{
        this.setState({status: event.target.value})
    }

    render(){
        console.log(this.props.status)
        return(
            <div className="criteria">
                { this.props.description }
                <div className="criteria-input">
                    <select value={this.props.status} onChange={this.handleChange}>
                        <option value="2" >Done</option> 
                        <option value="1" >In Progress</option>
                        <option value="0" >Not Done</option>
                        <option value="-1" >N/A</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Criteria;
