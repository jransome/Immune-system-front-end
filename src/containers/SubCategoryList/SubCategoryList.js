import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubCategoryList extends Component {

    renderList(){
        let subCategoryIDs = this.props.category.subCategories;
        let subCategoryArray = [];
        for (let index = 0; index < subCategoryIDs.length; index++) {
            const subCategoryId = subCategoryIDs[index];
            let subCat = this.props.subCategories[subCategoryId];
            subCategoryArray.push(
                <li
                    key={subCat.name}
                >
                    {subCat.name}   
                </li>
            )
        }
        return subCategoryArray;
    }


    render() {
        // if it doesn't exist yet return this
        if (!this.props.category) {
            return(
                 <div> Select to a category to get </div>
            );
        }
        console.log(this.props.category.subCategories)
        //  if it does exist return this
        return (
            <div>
                <div>SubCategories: {this.renderList()}</div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        category: state.activeCategory,
        subCategories: state.subCategories
    }
}

export default connect(mapStateToProps)(SubCategoryList);