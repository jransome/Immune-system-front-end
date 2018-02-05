import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions/CategoryActions';
import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../lib/Utility';

class CategoryList extends Component {
    // TODO: Is this Reduxy enough?
    onClickHandler = (category) => {
        this.props.selectCategory(category);
        this.props.selectSubCategory(null);
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {getListElements(this.props.categories, this.onClickHandler)}
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
    return bindActionCreators({ selectCategory: selectCategory, selectSubCategory: selectSubCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)