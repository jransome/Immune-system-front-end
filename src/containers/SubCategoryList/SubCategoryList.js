import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../helpers/GetListElements';

const SubCategoryList = (props) => {
    if (!props.activeCategoryID) {
        return(
             <div className="tab-panel"> Select a category</div>
        );
    }
    return (
        <ul className="tab-panel">
            {getListElements(props.subCategories, props.selectSubCategory, false, props.categories[props.activeCategoryID].subCategories)}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        activeCategoryID: state.activeTab.activeCategoryID,
        categories: state.categories,
        subCategories: state.subCategories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryList);