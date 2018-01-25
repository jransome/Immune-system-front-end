import React, { Component } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Category extends Component {
    render(){
        // console.log(this.props.subCategoriesData[0])
        const subCategoriesAry = [];
        for (let i = 0; i < this.props.subCategoriesData.length; i++) {
            let subCat = this.props.subCategoriesData[i];
            subCategoriesAry.push(
                <SubCategory 
                    key={'sub-' + i} 
                    subName={subCat.SubName} 
                    criteriaData={subCat.Criteria} 
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

