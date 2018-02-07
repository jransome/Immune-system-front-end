import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
// import { STATUS_TO_CLASS } from '../../Constants'

class Criterion extends Component {
    render(){
        return(
            <div className="criterion">
                <div className="criterion-name vertical-centred">{ this.props.criterion.name } </div>
                <div className="criterion-input vertical-centred">
                    <div className="buttons btn-group-sm btn-group-vertical"> 
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-hourglass"></span>                        
                        </button>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-ok"></span>                            
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        criterion: state.criteria[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}

export default connect(mapStateToProps)(Criterion);
