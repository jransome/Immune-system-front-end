import React, { Component } from 'react';
import { connect } from 'react-redux';

class CategoryDetail extends Component {
    render() {
        // if it doesn't exist yet return this
        if (!this.props.category) {
            return(
                 <div> Select to a category to get </div>
            );
        }
        //  if it does exist return this
        return (
            <div>
            <h3>Details for:</h3>
            <div>Name: {this.props.category.name}</div>
            <div>SubCategories: {this.props.subCategories}</div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        category: state.activeCategory
    }
}

export default connect(mapStateToProps)(CategoryDetail);