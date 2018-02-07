import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
// import { STATUS_TO_CLASS } from '../../Constants'

const Criterion = (props) => (
    <div className="criterion">
        <div className="criterion-name vertical-centred"> { props.criterion.name } </div>
        <div className="criterion-input vertical-centred">
            <div className="buttons btn-group-sm btn-group-vertical"> 
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-remove icon-not-done"></span>
                </button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-hourglass icon-in-progress"></span>                        
                </button>
                <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-ok icon-done"></span>                            
                </button>
            </div>
        </div>
        <div className="criterion-info-link">
            <a href={ props.criterion.link } target="_blank" className="glyphicon glyphicon-info-sign"/>                          
        </div>
    </div>
)

function mapStateToProps(state, ownProps) {
    return {
        criterion: state.criteria[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}

export default connect(mapStateToProps)(Criterion);
