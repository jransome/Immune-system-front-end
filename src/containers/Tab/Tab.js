import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Tab = (props) => (
    <div
        className="tab-items" 
        onClick={props.onClickFunction}
    >
        {props.name}
    </div>
)

// TODO: change active tab store to be just id not whole object

function mapStateToProps(state, ownProps) {
    if(ownProps.isCategoryTab){
        return {
            activeCategory: state.activeTab.activeCategory
        };
    } else {
        return {
            activeSubCategory: state.activeTab.activeSubCategory
        };
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectCategory: selectCategory }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

Tab.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    name         : PropTypes.string.isRequired,
    isCategoryTab: PropTypes.bool
};

export default Tab;