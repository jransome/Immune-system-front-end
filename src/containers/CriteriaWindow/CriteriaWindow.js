import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCriteriaCards } from '../../helpers/GetCriteriaCards';

class CriteriaWindow extends Component {
    render() {
        if (!this.props.activeSubCategory) {
            return(
                 <div> </div>
            );
        }

        return (
            <div className="criteria-window">
                {getCriteriaCards(this.props.criteria, ()=>{}, this.props.activeSubCategory.criteria)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeSubCategory: state.activeTab.activeSubCategory,
        criteria: state.criteria
    }
}

export default connect(mapStateToProps)(CriteriaWindow);