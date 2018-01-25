import React, { Component } from 'react';
import Constants, { STATUS_TO_CLASS } from '../../Constants'
import Criteria from '../Criteria/Criteria';

class SubCategory extends Component {
    getStatusStyle = () => {
        let style;
        let criteria = this.props.criteriaData;

        for (let i = 0; i < criteria.length; i++) {
            if(criteria[i].status == 1 || criteria[i].status == 0){
                style = STATUS_TO_CLASS[0];
                break;
            } else {            
                style = STATUS_TO_CLASS[2];
            }   
        }
        return style;
    }

    render() {
        const criteriaAry = [];
        for (let i = 0; i < this.props.criteriaData.length; i++) {
            let criteria = this.props.criteriaData[i];
            criteriaAry.push(
                <Criteria 
                    key={i} 
                    id={criteria.id}
                    description={criteria.description} 
                    status={criteria.status}
                    criteriaStatusChangeHandler={this.props.criteriaStatusChangeHandler} 
                />
            )
        }

        return(
            <div className={`sub-category ${this.getStatusStyle()}`}>
                <h2>{this.props.subName}</h2>
                { criteriaAry }
            </div>
        )
    }
}

export default SubCategory;