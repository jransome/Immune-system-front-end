import React, { Component } from 'react';
import { STATUS_TO_CLASS } from '../../Constants'

class Criteria extends Component {
    onChange = (event) => {
        this.props.criteriaStatusChangeHandler(this.props.id, parseInt(event.target.value));
    }
    
    getCritStatusStyle = (status) => {
        return STATUS_TO_CLASS[status];
    }

    render(){
        return(
            <div className={`criteria ${this.getCritStatusStyle(this.props.status)}`}>
                { this.props.description }
                <div className="criteria-input">
                    <select defaultValue={this.props.status} onChange={this.onChange}>
                        <option value="2" >Done</option> 
                        <option value="1" >In Progress</option>
                        <option value="0" >Not Done</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Criteria;
