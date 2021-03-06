import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/CategoryActions';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../helpers/GetListElements';

const CategoryList = (props) => (
    <ul className="tab-panel">
        { getListElements(props.categories, props.selectCategory, true) }
    </ul>
)

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);