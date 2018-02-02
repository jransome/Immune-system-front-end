import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListElements } from '../../lib/Utility';

class Window extends Component {
    render() {
        if (!this.props.activeSubCategory) {
            return(
                 <div> Select to a category and sub category to get </div>
            );
        }

        return (
            <div>
                Criteria: {getListElements(this.props.criteria, ()=>{}, this.props.activeSubCategory.criteria)}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        activeSubCategory: state.activeSubCategory,
        criteria: state.criteria
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
// }

export default connect(mapStateToProps)(Window);