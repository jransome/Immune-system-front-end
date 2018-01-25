import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Category extends Component {
    render(){
        const subCategoriesAry = [];
        for (let i = 0; i < this.props.subCategoriesData.length; i++) {
            let subCat = this.props.subCategoriesData[i];
            subCategoriesAry.push(
                <SubCategory 
                    key={'sub-' + i} 
                    subName={subCat.SubName} 
                    criteriaData={subCat.Criteria}
                    criteriaStatusChangeHandler={this.props.criteriaStatusChangeHandler} 
                />
            )
        }

        return(
            <div>
                {this.props.categoryName}
                {subCategoriesAry}
            </div>
        )
    }
}

export default Category;

