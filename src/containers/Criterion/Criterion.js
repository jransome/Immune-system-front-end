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

                <input type="checkbox" />
  
                <div class="btn-group dropup">
                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                        Not done <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#">Yes</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">No</a></li>>
                    </ul>
                </div>

                <div class="btn-group dropup">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        In progress<span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <input type="checkbox" />
                        <li><a href="#">Yes</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">No</a></li>
                    </ul>
                </div>

                <span class="input-group-addon">
                    <input type="checkbox" />
                </span>
                <div class="btn-group dropup">
                    <button type="button" class="btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown">
                        Yes <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                    <span class="input-group-addon">
                    <input type="checkbox" />
                </span>
                        <li role="separator" class="divider"></li>
                        <span class="input-group-addon">
                    <input type="checkbox" />
                </span><span class="input-group-addon">
                    <input type="checkbox" />
                </span>
                    </ul>
                </div>
                <input type="checkbox" />

                    {/* <select defaultValue={this.props.criterion.status} onChange={this.onChange}>
                        <option value="2" >Done</option> 
                        <option value="1" >In Progress</option>
                        <option value="0" >Not Done</option>
                    </select> */}
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
