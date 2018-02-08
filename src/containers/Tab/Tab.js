import React, { Component } from 'react';
import { connect } from 'react-redux';

const Tab = (props) => (
    <div 
        className="tab-item" 
        onClick={props.onClickFunction}
    >

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
export default Tab;