import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Category extends Component {

    renderSubCat(i, name) {
        return (
            <div key={"cat-" + i}>
                <SubCategory subName={name} criteriaDescriptions={this.props.criteriaDescriptions} />
            </div>
        );
    }

    render(){
        const subCategories = [];
        for (let i = 0; i < this.props.subNames.length; i++) {
            let subName = this.props.subNames[i];
            subCategories.push(this.renderSubCat(i, subName));
        }

        return(
            <div>
                {this.props.categoryName}
                {subCategories}
            </div>
        )
    }
}

export default Category;

