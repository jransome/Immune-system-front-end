import React, { Component } from 'react';
import Criteria from '../Criteria/Criteria';
import { Utility }from '../../modules/utility';

class SubCategory extends Component {
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
            <div className={`sub-category ${Utility.getStatusStyle(this.props.criteriaData)}`}>
                <h2>{this.props.subName}</h2>
                { criteriaAry }
            </div>
        )
    }
}

export default SubCategory;