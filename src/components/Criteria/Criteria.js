import React, { Component } from 'react';

class Criteria extends Component {
    render(){
        return(
            <div className="criteria">
                { this.props.description }
                <div className="criteria-input">
                    <select defaultValue={this.props.status} onChange={this.props.criteriaStatusChangeHandler}>
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
