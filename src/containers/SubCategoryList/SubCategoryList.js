import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListElements } from '../../lib/Utility';

class SubCategoryList extends Component {
    render() {
        if (!this.props.category) {
            return(
                 <div> Select to a category to get </div>
            );
        }
        
        return (
            <div>
                <div>SubCategories: {getListElements(this.props.subCategories, ()=>{}, this.props.category.subCategories)}</div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        category: state.activeCategory,
        subCategories: state.subCategories
    }
}

export default connect(mapStateToProps)(SubCategoryList);