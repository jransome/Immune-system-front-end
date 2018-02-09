import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Tab = (props) => {
    console.log(props.activeCategoryID);
    return (
        <div
            className={`tab-items ${props.tabID === props.activeTabID ? 'active' : ''}`} 
            onClick={props.onClickFunction}
        >
            {props.name}
        </div>
    );
}


// TODO: change active tab store to be just id not whole object

function mapStateToProps(state, ownProps) {
    if(ownProps.isCategoryTab){
        return {
            activeTabID: state.activeTab.activeCategoryID,
        };
    } else {
        return {
            activeTabID: state.activeTab.activeSubCategoryID
        };
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectCategory: selectCategory }, dispatch);
// }

export default connect(mapStateToProps)(Tab);

Tab.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    name         : PropTypes.string.isRequired,
    isCategoryTab: PropTypes.bool
};
