import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/CategoryActions';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../helpers/GetListElements';

class CategoryList extends Component {
    render() {
        return (
            <ul className="tab-panel">
                {getListElements(this.props.categories, this.props.selectCategory)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)