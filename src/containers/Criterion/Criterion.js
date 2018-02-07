import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectSubCategory } from '../../actions/SubCategoryActions';
import { bindActionCreators } from 'redux';
// import { STATUS_TO_CLASS } from '../../Constants'

class Criterion extends Component {
    // onChange = (event) => {
    //     this.props.criteriaStatusChangeHandler(this.props.id, parseInt(event.target.value));
    // }
    
    // getCritStatusStyle = (status) => {
    //     return STATUS_TO_CLASS[status];
    // }

    render(){
        return(
            // <div className={`criteria ${this.getCritStatusStyle(this.props.status)}`}>
            <div className="criterion row">
                <div class="col">
                    <div className="criterion-text">{ this.props.criterion.name } </div>
                </div>
                <div class="col">
                    <div className="buttons btn-group btn-group-xs"> 
                        <button type="button" className="btn btn-default">Not Done</button>
                        <button type="button" className="btn btn-default">In Progress</button>
                        <button type="button" className="btn btn-default">Done</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(ownProps)
    return {
        criterion: state.criteria[ownProps.id]
    }
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ selectSubCategory: selectSubCategory }, dispatch)
}

export default connect(mapStateToProps)(Criterion);
