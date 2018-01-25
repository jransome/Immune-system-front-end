import React, { Component } from 'react';

class Criteria extends Component {
    
    eventHandler = (event) => {
        this.props.criteriaStatusChangeHandler(this.props.id, event.target.value);
    }
    
    getStatusStyle = (status) => {
        const statusToClass = {
            '2': 'done',
            '1': 'in-progress',
            '0': 'not-done',
            '-1': 'not-applicable',
        }
        return statusToClass[status];
    }

    render(){
        return(
            <div className={`criteria ${this.getStatusStyle(this.props.status)}`}>
                { this.props.description }
                <div className="criteria-input">
                    <select defaultValue={this.props.status} onChange={this.eventHandler}>
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
