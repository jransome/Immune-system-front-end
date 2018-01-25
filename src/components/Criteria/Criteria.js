import React, { Component } from 'react';

class Criteria extends Component {

    criteriaStatusChangeHandler = (event) => {
        this.props.criteriaStatusChangeHandler(this.props.id, event.target.value);
    }

    getStatusStyle = (status) => {
        switch (status) {
            case 2:
                return 'done';
            case 1:
                return 'in-progress';
            case -1:
                return 'not-applicable';
            default:
                return 'not-done';
        }
    }

    render(){
        return(
            <div className={`criteria ${this.getStatusStyle(this.props.status)}`}>
                { this.props.description }
                <div className="criteria-input">
                    <select defaultValue={this.props.status} onChange={this.criteriaStatusChangeHandler}>
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
