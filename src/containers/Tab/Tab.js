import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Tab = (props) => {
    return (
        <div
            className={`tab-item ${props.tabID === props.activeTabID ? 'active-tab' : ''}`} 
            onClick={props.onClickFunction}
        >
            {props.name}
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    if(ownProps.isCategoryTab){
        return {
            activeTabID: state.activeTab.activeCategoryID
        };
    } else {
        return {
            activeTabID: state.activeTab.activeSubCategoryID
        };
    }
}

Tab.propTypes = {
    name            : PropTypes.string.isRequired,
    onClickFunction : PropTypes.func.isRequired,
    isCategoryTab   : PropTypes.bool.isRequired,
    tabID           : PropTypes.number.isRequired
};

export default connect(mapStateToProps)(Tab);