import React, { Component } from 'react';
import Criteria from '../Criteria/Criteria';

class SubCategory extends Component {
    renderCriteria(i, desc) {
        return (
            <div key={"sub-" + i}>
                <Criteria description={desc} />
            </div>
        );
    }

    render() {
        const criterias = [];
        for (let i = 0; i < this.props.criteriaDescriptions.length; i++) {
            let desc = this.props.criteriaDescriptions[i];
            criterias.push(this.renderCriteria(i, desc));
        }

        return(
            <div className="sub-category">
                <h2>{this.props.subName}</h2>
                { criterias }
            </div>
        )
    }
}

export default SubCategory;