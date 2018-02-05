import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../lib/Utility';

class Window extends Component {
    render() {
        console.log(this.props.activeSubCategory);
        if (!this.props.activeSubCategory) {
            return(
                 <div> Select to a category and sub category to get </div>
            );
        }

        return (
            <ul>
                {getListElements(this.props.criteria, ()=>{}, this.props.activeSubCategory.criteria)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeSubCategory: state.activeTab.activeSubCategory,
        criteria: state.criteria
    }
}

export default connect(mapStateToProps)(Window);