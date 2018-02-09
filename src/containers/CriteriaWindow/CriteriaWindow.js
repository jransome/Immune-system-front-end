import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCriteriaCards } from '../../helpers/GetCriteriaCards';

const CriteriaWindow = (props) => {
    if (!props.activeSubCategoryID) {
        return(
             <div> </div>
        );
    }
    return (
        <div className="criteria-window">
            {getCriteriaCards(props.criteria, ()=>{}, props.subCategories[props.activeSubCategoryID].criteria)}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        activeSubCategoryID: state.activeTab.activeSubCategoryID,
        subCategories: state.subCategories,
        criteria: state.criteria
    }
}

export default connect(mapStateToProps)(CriteriaWindow);