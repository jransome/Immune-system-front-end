import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../helpers/GetListElements';


class SubCategoryList extends Component {
    render() {
        if (!this.props.category) {
            return(
                 <div className="tab-panel"> Select to a category to get </div>
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
        category: state.activeTab.activeCategory,
        subCategories: state.subCategories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryList);