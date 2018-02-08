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

// function mapStateToProps(state) {
//     return {
//         categories: state.categories
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectCategory: selectCategory }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

Tab.propTypes = {
    onClick      : PropTypes.func,
    tabIndex     : PropTypes.number,
    isActive     : PropTypes.bool,
    name         : PropTypes.string.isRequired
};

export default Tab;