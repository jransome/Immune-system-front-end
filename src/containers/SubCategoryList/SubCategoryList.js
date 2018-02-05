import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListElements } from '../../lib/Utility';
import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';


class SubCategoryList extends Component {
    render() {
        if (!this.props.category) {
            return(
                 <div> Select to a category to get </div>
            );
        }
        return (
            <ul className="tab-panel">
                {getListElements(this.props.subCategories, this.props.selectSubCategory, this.props.category.subCategories)}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        category: state.activeCategory,
        subCategories: state.subCategories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryList);