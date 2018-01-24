import React, { Component } from 'react';
import Criteria from '../Criteria/Criteria';

class CategoryArea extends Component {
    renderCriteria(i, desc) {
        return (
            <div key={i}>
                <Criteria description={desc} />
            </div>
        );
    }

    render() {
        const criterias =[];
        for (let i = 0; i < this.props.criteriaDescriptions.length; i++) {
            let desc = this.props.criteriaDescriptions[i];
            criterias.push(this.renderCriteria(i, desc));
        }

        return(
            <div>
                { criterias }
            </div>
        )
    }
}

export default CategoryArea;