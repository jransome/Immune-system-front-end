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
            <div className="criterion">
                { this.props.criterion.name }
                <div className="criteria-input">
                    <select defaultValue={this.props.criterion.status} onChange={this.onChange}>
                        <option value="2" >Done</option> 
                        <option value="1" >In Progress</option>
                        <option value="0" >Not Done</option>
                    </select>
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
